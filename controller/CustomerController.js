import Customer from "../models/customer.js";
// import Karyawan from "../models/karyawan.js";
// import Waktu from "../models/waktu.js";
// import Status from "../models/status.js";


export const getCustomer = async (req,res) =>{ 
    try{
        const customer = await Customer.findAll({  
     } );
        res.status(200).json(customer);
    }catch(error){
        res.status(500).json({error : error.message})
    }
}

export const getCustomerById = async (req, res) => {
    try {
      const { id } = req.params;
      const customer = await Customer.findByPk(id);
      if (!customer) return res.status(404).json({ message: "Customer not found" });
      res.status(200).json(customer);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

export const createCustomer = async (req,res) =>{
        const {nama,nama_perusahaan, kontak} = req.body;
        const customer = await Customer.create({
            nama, nama_perusahaan, kontak
        });
        res.status(200).json(customer);
   
}


export const updateCustomer= async (req, res) => {
    try {
      const { id } = req.params;
      const { nama,nama_perusahaan, kontak} = req.body;
      const [updated] = await Customer.update(
        { nama,nama_perusahaan, kontak },
        { where: { id } }
      );
      if (updated) {
        const updateCustomer = await Customer.findByPk(id);
        res.status(200).json(updateCustomer);
      } else {
        res.status(404).json({ message: "Customer not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


  export const deleteCustomer = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Customer.destroy({ where: { id } });
      if (deleted) {
        res.status(204).end();
      } else {
        res.status(404).json({ message: "Customer not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  