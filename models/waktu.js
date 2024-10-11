import { DataTypes } from "sequelize";
import db from "../utils/connection.js";

const Waktu = db.define(
    "waktu",
    {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nama_proyek:{
        type: DataTypes.STRING,
        allowNull: false
    },
    tanggal_mulai:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tanggal_selesai:{  
        type: DataTypes.INTEGER,
        allowNull: false
    },
    
},{
    tableName: "waktu"
});



export default Waktu
