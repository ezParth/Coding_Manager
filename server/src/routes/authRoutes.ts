import express from "express";
import { signup, login, getCodeforcesInfo } from "../controllers/auth.controllers";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/codeforces", getCodeforcesInfo);

export default router;
