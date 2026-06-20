function ResultTable({ result }) {
  if (!result) return null;

  const badgeColor = {
    Positive: "bg-green-100 text-green-700",
    Neutral: "bg-yellow-100 text-yellow-700",
    Negative: "bg-red-100 text-red-700",
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg mt-6">
      <h2 className="text-2xl font-bold mb-4">
        Analysis Result
      </h2>

      <div className="space-y-4">

        <div>
          <p className="font-semibold">Sentiment</p>
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              badgeColor[result.sentiment]
            }`}
          >
            {result.sentiment}
          </span>
        </div>

        <div>
          <p className="font-semibold">Category</p>
          <p>{result.category}</p>
        </div>

        <div>
          <p className="font-semibold">
            Suggested Response
          </p>
          <div className="bg-gray-50 p-3 rounded">
            {result.reply}
          </div>
        </div>

      </div>
    </div>
  );
}

export default ResultTable;