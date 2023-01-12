import Sequelize from "sequelize";
import { dbInstance } from "../config/db.js";

const CompetencesModel = dbInstance.define(
    "competences",
    {
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        type:{
            type: Sequelize.STRING,
            allowNull: false
        },
        institution:{
            type: Sequelize.STRING,
            allowNull: false
        },
        year_start:{
            type: Sequelize.STRING,
            allowNull: false
        },
        year_end:{
            type: Sequelize.STRING,
            allowNull: false
        }
    }
);

export { CompetencesModel };