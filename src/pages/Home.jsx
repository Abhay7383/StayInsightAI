import ReviewForm from "../components/ReviewForm";
import ResultTable from "../components/ResultTable";

function Home({ darkMode }) {
  return (
    <div
      className={`min-h-screen py-10 transition-all duration-300 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-black"
      }`}
    >
      <div className="max-w-4xl mx-auto px-4">

        <div className="text-center mb-8">
          <h2
            className={`text-4xl font-bold ${
              darkMode
                ? "text-white"
                : "text-gray-800"
            }`}
          >
            Analyze Guest Reviews
          </h2>

          <p
            className={`mt-2 ${
              darkMode
                ? "text-gray-300"
                : "text-gray-600"
            }`}
          >
            AI-powered sentiment analysis for homestays.
          </p>
        </div>

        <div
          className={`rounded-2xl shadow-md p-6 mb-8 transition-all duration-300 ${
            darkMode
              ? "bg-gray-800"
              : "bg-white"
          }`}
        >
          <ReviewForm />
        </div>

        <div
          className={`rounded-2xl shadow-md p-6 transition-all duration-300 ${
            darkMode
              ? "bg-gray-800"
              : "bg-white"
          }`}
        >
          <ResultTable />
        </div>

      </div>
    </div>
  );
}

export default Home;