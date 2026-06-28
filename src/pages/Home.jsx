import { useEffect, useState } from "react";
import ReviewForm from "../components/ReviewForm";
import ResultTable from "../components/ResultTable";
import { getReviews } from "../services/reviewService";

function Home({ darkMode }) {
  const [reviews, setReviews] = useState([]);

  const loadReviews = async () => {
    try {
      const res = await getReviews();
      setReviews(res.data || []);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadReviews();
  }, []);

  return (
    <div
      className={`min-h-screen py-10 transition-all duration-300 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-black"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">

        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">
            Analyze Guest Reviews
          </h2>

          <p className="mt-3">
            AI-powered sentiment analysis for homestays.
          </p>
        </div>

        <ReviewForm loadReviews={loadReviews} />

        <ResultTable
          reviews={reviews}
          loadReviews={loadReviews}
        />

      </div>
    </div>
  );
}

export default Home;