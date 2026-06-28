import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    reviewerName: {
      type: String,
      required: [true, "Reviewer name is required"],
      trim: true,
    },

    reviewText: {
      type: String,
      required: [true, "Review text is required"],
      trim: true,
    },

    sentiment: {
      type: String,
      enum: ["Positive", "Neutral", "Negative"],
      default: "Neutral",
    },

    category: {
      type: String,
      default: "General",
    },

    suggestedResponse: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Review = mongoose.model("Review", reviewSchema);

export default Review;