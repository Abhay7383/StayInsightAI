
import { useState } from "react";
import {
  deleteReview,
  updateReview,
} from "../services/reviewService";

// import { analyzeReview } from "../utils/analyzeReview";

function ResultTable({ reviews, loadReviews }) {
  const [editingId, setEditingId] = useState(null);
  const [editedText, setEditedText] = useState("");

  const removeReview = async (id) => {
    await deleteReview(id);
    loadReviews();
  };

  const startEditing = (review) => {
    setEditingId(review._id);
    setEditedText(review.reviewText);
  };

  const saveEdit = async (review) => {
    try {
      // Analyze the updated review
      const analysis = analyzeReview(editedText);

      // Update MongoDB
      await updateReview(review._id, {
        reviewerName: review.reviewerName,
        reviewText: editedText,
        sentiment: analysis.sentiment,
        category: analysis.category,
        suggestedResponse: analysis.suggestedResponse,
      });

      setEditingId(null);
      loadReviews();

    } catch (error) {
      console.error(error);
      alert("Failed to update review.");
    }
  };

  return (
    <div className="mt-10 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">

      <h2 className="text-2xl font-bold mb-6">
        Saved Reviews
      </h2>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>
            <tr className="border-b">
              <th className="p-3">Reviewer</th>
              <th className="p-3">Review</th>
              <th className="p-3">Sentiment</th>
              <th className="p-3">Category</th>
              <th className="p-3">Reply</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>

            {reviews.length === 0 ? (

              <tr>
                <td
                  colSpan="6"
                  className="text-center p-5"
                >
                  No Reviews Yet
                </td>
              </tr>

            ) : (

              reviews.map((review) => (

                <tr
                  key={review._id}
                  className="border-b"
                >

                  <td className="p-3">
                    {review.reviewerName}
                  </td>

                  <td className="p-3">

                    {editingId === review._id ? (

                      <input
                        className="border rounded px-3 py-2 w-full text-black"
                        value={editedText}
                        onChange={(e) =>
                          setEditedText(e.target.value)
                        }
                      />

                    ) : (

                      review.reviewText

                    )}

                  </td>

                  <td className="p-3">

                    <span
                      className={`px-3 py-1 rounded-full text-white ${
                        review.sentiment === "Positive"
                          ? "bg-green-500"
                          : review.sentiment === "Negative"
                          ? "bg-red-500"
                          : "bg-yellow-500"
                      }`}
                    >
                      {review.sentiment}
                    </span>

                  </td>

                  <td className="p-3">
                    {review.category}
                  </td>

                  <td className="p-3">
                    {review.suggestedResponse}
                  </td>

                  <td className="p-3 flex gap-2">

                    {editingId === review._id ? (

                      <>
                        <button
                          onClick={() => saveEdit(review)}
                          className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded"
                        >
                          Save
                        </button>

                        <button
                          onClick={() => setEditingId(null)}
                          className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded"
                        >
                          Cancel
                        </button>
                      </>

                    ) : (

                      <>
                        <button
                          onClick={() => startEditing(review)}
                          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() => removeReview(review._id)}
                          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                        >
                          Delete
                        </button>
                      </>

                    )}

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default ResultTable;