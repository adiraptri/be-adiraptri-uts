import { DataTypes } from "sequelize";
import db from "../utils/connection.js";

const Karyawan = db.define(
    "Karyawan",
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
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    posisi:{  
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status:{  
        type: DataTypes.INTEGER,
        allowNull: false
    }
    
},{
    tableName: "karyawan"
});



export default Karyawan