import Router from "express";
import {
    createLanguage,
    getLanguages
} from "../controllers/languages.js";

const languagesRoutes = Router()

languagesRoutes.post("/createLanguages", createLanguage)

languagesRoutes.get("/getLanguages", getLanguages)

export { languagesRoutes }