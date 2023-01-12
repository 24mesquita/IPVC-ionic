import { LanguagesModel } from "../models/languages.js";

// create new language, verify if name already exist
export const createLanguage = async (req, res) => {
    const { name, image } = req.body;
    const newLanguage = await LanguagesModel.create({
        name,
        image
    }, {
        fields: ["name", "image"]
    });
    if (newLanguage) {
        return res.json({
            message: "Language created successfully",
            data: newLanguage
        }); 
    }
}
//get all languages
export const getLanguages = async (req, res) => {
    const languages = await LanguagesModel.findAll();
    res.send(languages
    );
}