import express from "express";
import { signup, login, getCodeforcesInfo, isAuthenticated } from "../controllers/auth.controllers";
import { saveProject, getProjects, saveResume, getResume, isAdmin } from "../controllers/user.controller"

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/codeforces",getCodeforcesInfo);
router.post("/saveProject", isAuthenticated, saveProject);
router.get("/getProjects", isAuthenticated, getProjects);
router.post("/saveResume", isAuthenticated, saveResume);
router.get("/getProject", isAuthenticated, getResume);
router.get("/isAdmin", isAuthenticated, isAdmin);

export default router;
