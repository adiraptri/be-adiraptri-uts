import { DataTypes } from "sequelize";
import db from "../utils/connection.js";

const Customer = db.define(
    "Customer",
    {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nama:{
        type: DataTypes.STRING,
        allowNull: false
    },
    nama_perusahaan:{
        type: DataTypes.STRING,
        allowNull: false
    },
    kontak:{  
        type: DataTypes.INTEGER,
        allowNull: false
    }
    
},{
    tableName: "customer"
});



export default Customer