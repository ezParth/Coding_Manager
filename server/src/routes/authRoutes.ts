import express from "express";
import { signup, login, getCodeforcesInfo, isAuth } from "../controllers/auth.controllers";
import { saveProject } from "../controllers/user.controller"

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/codeforces", getCodeforcesInfo);
router.post("/saveProject", saveProject);

export default router;
