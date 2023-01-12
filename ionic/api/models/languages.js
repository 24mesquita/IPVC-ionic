import Sequelize from "sequelize";
import { dbInstance } from "../config/db.js";

const LanguagesModel = dbInstance.define(
    "languages",
    {
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name:{
            type: Sequelize.STRING,
            allowNull: false
        },
        image:{
            type: Sequelize.STRING,
            allowNull: false
        }
    }
);

export { LanguagesModel };