import Progres from "../models/progres.js";

export const getProgres= async (req,res) =>{ 
    try{
        const progres = await Progres.findAll();
        res.status(200).json(progres);
    }catch(error){
        res.status(500).json({error : error.message})
    }
}

export const getProgresById = async (req, res) => {
    try {
      const { id } = req.params;
      const Progres= await Progres.findByPk(id);
      if (!Progres) return res.status(404).json({ message: "Progres not found" });
      res.status(200).json(Progres);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

export const createProgres = async (req,res) =>{
        const {progres_proyek, tanggal_laporan, nama_karyawan} = req.body;
        const Progres  = await Progres.create({
            progres_proyek, tanggal_laporan, nama_karyawan
        });
        res.status(200).json(Progres);
   
}


export const updateProgres  = async (req, res) => {
    try {
      const { id } = req.params;
      const { progres_proyek, tanggal_laporan, nama_karyawan } = req.body;
      const [updated] = await Progres.update(
        { progres_proyek, tanggal_laporan, nama_karyawan },
        { where: { id } }
      );
      if (updated) {
        const updatedProgres = await Progres.findByPk(id);
        res.status(200).json(updatedProgres);
      } else {
        res.status(404).json({ message: "Progres not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


  export const deleteProgres = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Progres.destroy({ where: { id } });
      if (deleted) {
        res.status(204).end();
      } else {
        res.status(404).json({ message: "Progres not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  