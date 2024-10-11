import Status from "../models/status.js";

export const getStatus= async (req,res) =>{ 
    try{
        const status = await Status.findAll();
        res.status(200).json(status);
    }catch(error){
        res.status(500).json({error : error.message})
    }
}

export const getStatusById = async (req, res) => {
    try {
      const { id } = req.params;
      const Status = await Status.findByPk(id);
      if (!Status) return res.status(404).json({ message: "Status not found" });
      res.status(200).json(Status);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }   
  };
  

export const createStatus = async (req,res) =>{
        const {status_tugas, batas_waktu, nama_karyawan} = req.body;
        const Status = await Status.create({
            status_tugas, batas_waktu, nama_karyawan
        });
        res.status(200).json(Status);
   
}


export const updateStatus = async (req, res) => {
    try {
      const { id } = req.params;
      const {status_tugas, batas_waktu, nama_karyawan} = req.body;
      const [updated] = await Status.update(
        { status_tugas, batas_waktu, nama_karyawan },
        { where: { id } }
      );
      if (updated) {
        const updatedStatus = await Status.findByPk(id);
        res.status(200).json(updatedStatus);
      } else {
        res.status(404).json({ message: "Status not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


  export const deleteStatus = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Status.destroy({ where: { id } });
      if (deleted) {
        res.status(204).end();
      } else {
        res.status(404).json({ message: "Status not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  