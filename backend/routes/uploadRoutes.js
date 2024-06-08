import express, { Router } from "express";
import { uploadHandler } from "../controllers/imageHandler.js";
import { upload } from "../utils/multer.js";

const router = express.Router()

router.post('/upload',upload.single('image'), uploadHandler)

export default router