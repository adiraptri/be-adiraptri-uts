import Waktu from "../models/waktu.js";


export const getWaktu= async (req, res) => {
    try {
      const waktu = await Waktu.findAll({
      });
      res.status(200).json(waktu);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


  export const getWaktuById= async (req, res) => {
    try {
      const {id} = req.params
      const waktu = await Waktu.findAll({
      });
      if (!waktu) return res.status(404).json({ message: "Waktu not found" });
      res.status(200).json(waktu);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


  export const createWaktu= async (req, res) => {
    try {
      const {KaryawanId, StatusId, ProgresId , WaktuId} = req.body;
      const waktu = await Waktu.create({
      
        KaryawanId, StatusId, ProgresId , WaktuId
      });
      let Karyawan = await Karyawan.findByPk(KaryawanId);
      if (!Karyawan) {
        return res.status(400).json({ message: "Karyawan not found" });
      }
      let Status = await Status.findByPk(StatusId);
      if (!Status) {
        return res.status(400).json({ message: "Status not found" });
      }
      let Progres = await Progres.findByPk(ProgresId);
      if (!Progres) {
        return res.status(400).json({ message: "Progres not found" });
      }
    } catch (error) {
        res.status(500).json({ error: error.message });
      }
    
    }


  export const deleteWaktu = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Waktu.destroy({ where: { id } });
      if (deleted) {
        res.status(204).end();
      } else {
        res.status(404).json({ message: "Waktu not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


  export const updateWaktu = async (req, res) => {
    try {
      const { id } = req.params;
      const { KaryawanId, StatusId, ProgresId , WaktuId } = req.body;
  
      const [updated] = await Waktu.update(
        { KaryawanId, StatusId, ProgresId , WaktuId },
        { where: { id } }
      );
      if (updated) {
        const updateWaktu = await Waktu.findByPk(id);
        res.status(200).json(updateWaktu);
      } else {
        res.status(404).json({ message: "Waktu not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };