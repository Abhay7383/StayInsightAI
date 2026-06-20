import { useState } from "react";

function ReviewForm() {
  const [review, setReview] = useState("");

  return (
    <div className="bg-white shadow-xl rounded-2xl p-8">

      <label className="block text-xl font-semibold mb-4">
        Guest Review
      </label>

      <textarea
        rows="6"
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Paste guest review here..."
        className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        className="mt-5 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition"
      >
        Analyze Review
      </button>

    </div>
  );
}

export default ReviewForm;