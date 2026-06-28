import Review from "../models/Review.js";

// =========================
// GET All Reviews
// GET /api/reviews
// =========================
export const getReviews = async (req, res, next) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: reviews.length,
      data: reviews,
    });
  } catch (error) {
    next(error);
  }
};

// =========================
// GET Single Review
// GET /api/reviews/:id
// =========================
export const getReviewById = async (req, res, next) => {
  try {
    const review = await Review.findById(req.params.id);

    if (!review) {
      return res.status(404).json({
        success: false,
        message: "Review not found",
      });
    }

    res.status(200).json({
      success: true,
      data: review,
    });
  } catch (error) {
    next(error);
  }
};

// =========================
// POST Create Review
// POST /api/reviews
// =========================
export const createReview = async (req, res, next) => {
  try {
    const review = await Review.create(req.body);

    res.status(201).json({
      success: true,
      message: "Review added successfully",
      data: review,
    });
  } catch (error) {
    next(error);
  }
};

// =========================
// PUT Update Review
// PUT /api/reviews/:id
// =========================
export const updateReview = async (req, res, next) => {
  try {
    const review = await Review.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!review) {
      return res.status(404).json({
        success: false,
        message: "Review not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Review updated successfully",
      data: review,
    });
  } catch (error) {
    next(error);
  }
};

// =========================
// DELETE Review
// DELETE /api/reviews/:id
// =========================
export const deleteReview = async (req, res, next) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.id);

    if (!review) {
      return res.status(404).json({
        success: false,
        message: "Review not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Review deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

// =========================
// SEARCH Reviews
// GET /api/reviews/search?sentiment=Positive
// =========================
export const searchReviews = async (req, res, next) => {
  try {
    const { sentiment, category } = req.query;

    let filter = {};

    if (sentiment) filter.sentiment = sentiment;
    if (category) filter.category = category;

    const reviews = await Review.find(filter);

    res.status(200).json({
      success: true,
      count: reviews.length,
      data: reviews,
    });
  } catch (error) {
    next(error);
  }
};