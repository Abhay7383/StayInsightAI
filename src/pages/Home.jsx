import ReviewForm from "../components/ReviewForm";
import ResultTable from "../components/ResultTable";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800">
            Analyze Guest Reviews
          </h2>

          <p className="text-gray-600 mt-2">
            AI-powered sentiment analysis for homestays.
          </p>
        </div>

        <ReviewForm />
        <ResultTable />

      </div>
    </div>
  );
}

export default Home;