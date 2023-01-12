import Router from "express"
import { skillsRoutes } from "../routes/skills.js";
import { infoRoutes } from "../routes/info.js";
import { languagesRoutes } from "../routes/languages.js";
import { competencesRoutes } from "../routes/competences.js";

const routes = Router();

routes.use("/skills", skillsRoutes),
routes.use("/info", infoRoutes)
routes.use("/languages", languagesRoutes)
routes.use("/competences", competencesRoutes)

routes.get("/api", (req, res) => {
    res.send(skillsRoutes);
    res.send(infoRoutes);
    res.send(languagesRoutes);
    res.send(competencesRoutes);
  });
  
export { routes }