import { CompetencesModel } from "../models/competences.js";

// create new competence, verify if name already exist
export const createCompetence = async (req, res) => {
    const { type, institution, year_start, year_end } = req.body;
    const newCompetence = await CompetencesModel.create({
        type,
        institution,
        year_start,
        year_end
    }, {
        fields: ["type", "institution", "year_start", "year_end"]
    });
    if (newCompetence) {
        return res.json({
            message: "Competence created successfully",
            data: newCompetence
        }); 
    }
}

// get all competences
export const getCompetences = async (req, res) => {
    const competences = await CompetencesModel.findAll();
    res.send(competences
    );
}
