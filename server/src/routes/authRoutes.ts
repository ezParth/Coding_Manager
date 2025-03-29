import express from "express";
import { signup, login, getCodeforcesInfo, isAuth, isAuthenticated } from "../controllers/auth.controllers";
import { saveProject } from "../controllers/user.controller"

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/codeforces", isAuthenticated,getCodeforcesInfo);
router.post("/saveProject", isAuthenticated,saveProject);

export default router;
