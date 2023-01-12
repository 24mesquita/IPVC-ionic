import Router from "express";
import {
    createCompetence,
    getCompetences
} from "../controllers/competences.js";

const competencesRoutes = Router()

competencesRoutes.post("/createCompetences", createCompetence)

competencesRoutes.get("/getCompetences", getCompetences)

export { competencesRoutes }