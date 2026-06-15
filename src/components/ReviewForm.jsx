import { useState } from "react";

function ReviewForm({ onAnalyze }) {
  const [review, setReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAnalyze(review);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-5 rounded shadow"
    >
      <h2 className="text-xl font-bold mb-4">
        Enter Review
      </h2>

      <textarea
        rows="5"
        className="w-full border p-3 rounded"
        placeholder="Paste guest review here..."
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
      >
        Analyze
      </button>
    </form>
  );
}

export default ReviewForm;