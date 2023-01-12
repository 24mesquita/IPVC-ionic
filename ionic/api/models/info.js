import Sequelize from "sequelize";
import { dbInstance } from "../config/db.js";

const InfoModel = dbInstance.define(
    "info",
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
        about:{
            type: Sequelize.STRING,
            allowNull: false
        },
        image:{
            type: Sequelize.STRING,
            allowNull: false
        }
    }
);

export { InfoModel };