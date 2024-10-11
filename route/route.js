import express from "express";
import { getCustomer, deleteCustomer, createCustomer, updateCustomer, getCustomerById } from "../controller/CustomerController.js";
import { createkaryawan, deleteKaryawan, getKaryawan, updatekaryawan, getKaryawanById } from "../controller/KaryawanController.js";
import { createWaktu, deleteWaktu, getWaktu, updateWaktu, getWaktuById } from "../controller/WaktuController.js";
import { createStatus, deleteStatus, getStatus, getStatusById, updateStatus } from "../controller/StatusController.js";
import { createProgres, deleteProgres, getProgres, updateProgres, getProgresById } from "../controller/ProgresController.js";
const router = express.Router();

router.get("/customer", getCustomer)
router.delete("/customer/delete/:id", deleteCustomer )
router.post("/customer/post", createCustomer )
router.put("/customer/update/:id", updateCustomer)
router.get("/customer/:id", getCustomerById)

router.get("/karyawan", getKaryawan)
router.delete("/karyawan/delete/:id", deleteKaryawan)
router.post("/karyawan/post", createkaryawan )
router.put("/karyawan/update/:id", updatekaryawan)
router.get("/karyawan/:id", getKaryawanById)

router.get("/waktu", getWaktu)
router.delete("/waktu/delete/:id", deleteWaktu)
router.post("/waktu/post", createWaktu )
router.put("/waktu/update/:id", updateWaktu)
router.get("/waktu/:id", getWaktuById)

router.get("/status", getStatus)
router.delete("/status/delete/:id", deleteStatus)
router.post("/status/post", createStatus )
router.put("/status/update/:id", updateStatus)
router.get("/status/:id", getStatusById)


router.get("/progres", getProgres)
router.delete("/progres/delete/:id", deleteProgres)
router.post("/progres/post", createProgres)
router.put("/progres/update/:id", updateProgres)
router.get("/progres/:id", getProgresById)

export default router