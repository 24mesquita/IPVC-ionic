import Sequelize from "sequelize";
import { dbInstance } from "../config/db.js";

const SkillsModel = dbInstance.define(
    "skills",
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

export { SkillsModel };