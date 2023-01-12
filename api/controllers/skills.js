import { SkillsModel } from "../models/skills.js";

// create new skill, verify if name already exist
export const createSkill = async (req, res) => {
    const { name, image } = req.body;
    const newSkill = await SkillsModel.create({
        name,
        image
    }, {
        fields: ["name", "image"]
    });
    if (newSkill) {
        return res.json({
            message: "Skill created successfully",
            data: newSkill
        });
    }
}

// get all skills
export const getSkills = async (req, res) => {
    const skills = await SkillsModel.findAll();
    res.send(skills
    );
}
