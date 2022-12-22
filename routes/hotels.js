import express from "express";
import {
  countByType,
  countByCity,
  createHotel,
  deleteHotel,
  getAllHotel,
  getHotel,
  updateHotel,
  getHotelRooms,
} from "../controllers/hotelController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE

router.post("/",  createHotel);
//UPDATE
router.put("/:id", verifyAdmin, updateHotel);
//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);
//GET
router.get("/find/:id", getHotel);
//GET ALL
router.get("/", getAllHotel);

router.get("/", getAllHotel);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);

export default router;
