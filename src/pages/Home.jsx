import { useState } from "react";
import ReviewForm from "../components/ReviewForm";
import ResultTable from "../components/ResultTable";
import { analyzeReview } from "../services/geminiService";

function Home() {
  const [result, setResult] = useState(null);

  const handleAnalyze = async (review) => {
    const data = await analyzeReview(review);
    setResult(data);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">

      <section className="text-center mb-10">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          AI-Powered Guest Review Analysis
        </h1>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          StayInsight AI helps homestay owners analyze guest
          reviews, identify customer sentiment, detect key
          service issues, and generate intelligent response
          suggestions using Artificial Intelligence.
        </p>
      </section>

      <ReviewForm onAnalyze={handleAnalyze} />

      <ResultTable result={result} />

    </div>
  );
}

export default Home;