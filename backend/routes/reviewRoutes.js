import express from "express";

import {
  getReviews,
  getReviewById,
  createReview,
  updateReview,
  deleteReview,
  searchReviews,
} from "../controllers/reviewController.js";

const router = express.Router();

// Search Reviews
router.get("/search", searchReviews);

// Get All Reviews
router.get("/", getReviews);

// Get Single Review
router.get("/:id", getReviewById);

// Create Review
router.post("/", createReview);

// Update Review
router.put("/:id", updateReview);

// Delete Review
router.delete("/:id", deleteReview);

export default router;