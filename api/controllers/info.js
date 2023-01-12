import { InfoModel } from "../models/info.js";

// create new info, verify if name already exist
export const createInfo = async (req, res) => {
    const { name, about, image } = req.body;
    const newInfo = await InfoModel.create({
        name,
        about,
        image
    }, {
        fields: ["name", "about", "image"]
    });
    if (newInfo) {
        return res.json({
            message: "Info created successfully",
            data: newInfo
        }); 
    }
}



// get all info
export const getInfo = async (req, res) => {
    const info = await InfoModel.findOne();
    res.send(
         info
    );
}

