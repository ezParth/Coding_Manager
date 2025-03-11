import { Request, Response, NextFunction, RequestHandler } from "express";
import User from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import path from "path";
import dotenv from "dotenv"
import { fetchCodeforcesData } from "../config/codeforces";
dotenv.config({path: path.resolve(__dirname, "../config/.env")})

const JWT_SECRET = process.env.JWT_SECRET as string;

export const signup: RequestHandler = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            res.status(400).json({ message: "User already exists" });
            return;
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();

        const token = jwt.sign({ id: newUser._id, username: newUser.username }, JWT_SECRET, {
            expiresIn: "1h",
        });

        res.cookie("token", token, {
            httpOnly: true,
            sameSite: "strict",
        });

        res.status(201).json({ success: true, message: "User created successfully!", token });
    } catch (error) {
        console.log("Error in signup function:", error);
        next(error); // Pass error to Express error handler
    }
};


export const login: RequestHandler = async (req, res, next) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });
        if (!user) {
            res.status(400).json({ message: "Invalid username or password" });
            return;
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            res.status(404).json({ message: "Invalid username or password" });
            return;
        }

        const token = jwt.sign({ id: user._id, username: user.username }, JWT_SECRET, {
            expiresIn: "1h",
        });

        res.cookie("token", token, {
            httpOnly: true,
            sameSite: "strict",
        });

        res.json({ success: true, message: `Welcome ${user.username}`, token });
    } catch (error) {
        console.log(error);
        next(error);
    }
};


export const isAuth: RequestHandler = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        res.status(401).json({ message: "Unauthorized, No token found" });
        return;
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET) as { id: string; username: string };
        (req as any).user = decoded;
        console.log("Decoded", decoded);
        next();
    } catch (error) {
        console.log("Error in isAuth", error);
        res.status(401).json({ message: "Invalid token" });
    }
};

export const getCodeforcesInfo: RequestHandler = async (req, res, next) => {
    try {
        const handle = req.query.handle as string;

        if (!handle || typeof handle !== "string") {
            res.status(400).json({ message: "Handle is required and must be a string!" });
            return; // ✅ Ensure function execution stops
        }

        console.log(`Fetching Codeforces data: https://codeforces.com/api/user.info?handles=${handle}`);

        const data = await fetchCodeforcesData("user.info", { handles: handle });

        if (!data || data.status !== "OK") {
            res.status(500).json({ message: "Failed to fetch user info from Codeforces." });
            return; // ✅ Ensure function execution stops
        }

        res.status(200).json({ success: true, data }); // ✅ No need to return Response object
    } catch (error) {
        console.error("Error fetching user info:", error);
        next(error); // ✅ Ensure Express handles the error properly
    }
};
