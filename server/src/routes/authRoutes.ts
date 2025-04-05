import express from "express";
import { signup, login, getCodeforcesInfo, isAuthenticated } from "../controllers/auth.controllers";
import { saveProject, getProjects } from "../controllers/user.controller"

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/codeforces",getCodeforcesInfo);
router.post("/saveProject", isAuthenticated, saveProject);
router.get("/getProjects", isAuthenticated, getProjects);
router.post("/saveResume", isAuthenticated, saveProject);
router.get("/getProject", isAuthenticated, getProjects)

export default router;
