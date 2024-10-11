import Karyawan from "../models/karyawan.js";
import Status from "../models/status.js";


export const getKaryawan = async (req,res) =>{ 
    try{
        const karyawan = await Karyawan.findAll({
        //   include : {
        //     model : Status,
        //     as : "Status"
        //   }
        });
        res.status(200).json(karyawan);
    }catch(error){
        res.status(500).json({error : error.message})
    }
}

export const getKaryawanById = async (req, res) => {
    try {
      const { id } = req.params;
      const karyawan = await karyawan .findByPk(id);
      if (!karyawan ) return res.status(404).json({ message: "karyawan not found" });
      res.status(200).json(karyawan );
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

export const createkaryawan  = async (req,res) =>{
        const {nama, email, posisi, status} = req.body;
        const karyawan  = await karyawan .create({
            nama, email, posisi, status
        });
        res.status(200).json(karyawan);
   
}


export const updatekaryawan = async (req, res) => {
    try {
      const { id } = req.params;
      const { nama, email, posisi, status} = req.body;
      const [updated] = await Cafe.update(
        { nama, email, posisi, status},
        { where: { id } }
      );
      if (updated) {
        const updateKaryawan= await Karyawan.findByPk(id);
        res.status(200).json(updateKaryawan);
      } else {
        res.status(404).json({ message: "Karyawan not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


  export const deleteKaryawan = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Karyawan.destroy({ where: { id } });
      if (deleted) {
        res.status(204).end();
      } else {
        res.status(404).json({ message: "Karyawan not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  