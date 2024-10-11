import { DataTypes } from "sequelize";
import db from "../utils/connection.js";

const Status = db.define(
    "status",
    {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    status_tugas:{
        type: DataTypes.STRING,
        allowNull: false
    },
    batas_waktu:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nama_karyawan:{  
        type: DataTypes.STRING,
        allowNull: false
    },
    
},{
    tableName: "status"
});



export default Status