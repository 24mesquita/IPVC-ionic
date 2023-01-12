import Router from "express";
import {
    createInfo,
    getInfo
} from "../controllers/info.js";

const infoRoutes = Router()

infoRoutes.post("/createInfo", createInfo)

infoRoutes.get("/getInfo", getInfo)

export { infoRoutes }   