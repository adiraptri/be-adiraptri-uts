import { DataTypes } from "sequelize";
import db from "../utils/connection.js";

const Progres = db.define(
    "Progres",
    {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    progres_proyek:{
        type: DataTypes.STRING,
        allowNull: false
    },
    tanggal_laporan:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nama_karyawan:{  
        type: DataTypes.STRING,
        allowNull: false
    },
    
},{
    tableName: "progres"
});



export default Progres