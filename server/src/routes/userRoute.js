import express from "express";
import {
  getAllUser,
  createUser,
  getUserById,
  deleteUser,
  updateUser,
} from "../controllers/userController.js";
import upload from "../middlewares/multerMiddleware.js";
const router = express.Router();

//user route
router.get("/user", getAllUser);
router.post("/user/create", upload.single("image"), createUser);
router.get("/user/:id", getUserById);
router.delete("/user/:id", deleteUser);
router.put("/user/:id", upload.single("image"), updateUser);

export default router;
