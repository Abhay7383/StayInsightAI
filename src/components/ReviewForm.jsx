import { useState } from "react";
import { analyzeReview } from "../utils/analyzeReview";
import { createReview } from "../services/reviewService";

import {
  Button,
  Modal,
  Toast,
  Loader,
} from "./ui";

function ReviewForm({ loadReviews }) {
  const [review, setReview] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (review.trim() === "") {
      alert("Please enter a review.");
      return;
    }

    setLoading(true);

    try {
      // Analyze the review
      const analysis = analyzeReview(review);

      // Save to MongoDB
      await createReview({
        reviewerName: "Guest",
        reviewText: review,
        sentiment: analysis.sentiment,
        category: analysis.category,
        suggestedResponse: analysis.suggestedResponse,
      });

      // Clear textbox
      setReview("");

      // Reload table
      if (loadReviews) {
        await loadReviews();
      }

      // Success toast
      setShowToast(true);

      setTimeout(() => {
        setShowToast(false);
      }, 3000);

    } catch (error) {
      console.error(error);
      alert("Failed to save review.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-6 rounded-2xl shadow-lg">

        <h2 className="text-2xl font-bold mb-4">
          Guest Review Analysis
        </h2>

        <textarea
          rows="6"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Enter guest review..."
          className="
            w-full
            border
            rounded-lg
            p-4
            mb-5
            text-black
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
          "
        />

        <div className="flex gap-4">

          <Button onClick={handleAnalyze}>
            Analyze & Save Review
          </Button>

          <Button
            className="bg-gray-600 hover:bg-gray-700"
            onClick={() => setShowModal(true)}
          >
            Project Info
          </Button>

        </div>

        {loading && (
          <div className="mt-5">
            <Loader />
          </div>
        )}

      </div>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Project Information"
      >
        <p>
          StayInsight AI helps homestay owners analyze guest reviews,
          classify sentiments, and improve customer experience.
        </p>
      </Modal>

      {showToast && (
        <Toast
          message="Review saved successfully!"
          type="success"
        />
      )}
    </>
  );
}

export default ReviewForm;