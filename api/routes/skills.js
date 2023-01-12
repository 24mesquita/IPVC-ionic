import Router from "express"
import {
    createSkill,
    getSkills
} from "../controllers/skills.js";

const skillsRoutes = Router()

skillsRoutes.post("/createSkill", createSkill)
skillsRoutes.get("/getSkills", getSkills)

export { skillsRoutes }