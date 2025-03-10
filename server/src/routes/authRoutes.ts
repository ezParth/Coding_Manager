import express from "express";
import { signup, login, getUserInfo } from "../controllers/auth.controllers";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/userinfo", getUserInfo);
router.get("/codeforces", );

export default router;
