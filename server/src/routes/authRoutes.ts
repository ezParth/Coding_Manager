import express from "express";
import { signup, login, getCodeforcesInfo, isAuth, isAuthenticated } from "../controllers/auth.controllers";
import { saveProject, getProjects } from "../controllers/user.controller"

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/codeforces",getCodeforcesInfo);
router.post("/saveProject", isAuthenticated,saveProject);
router.get("/getProjects", isAuthenticated, getProjects)

export default router;
