import express from "express";

import { analyzeReview } from "../controllers/aiController.js";

const router = express.Router();

router.post("/analyze", analyzeReview);

export default router;