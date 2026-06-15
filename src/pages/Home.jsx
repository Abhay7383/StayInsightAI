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
    <div className="max-w-4xl mx-auto mt-8">
      <ReviewForm onAnalyze={handleAnalyze} />
      <ResultTable result={result} />
    </div>
  );
}

export default Home;