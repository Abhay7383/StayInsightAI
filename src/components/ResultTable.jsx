function ResultTable() {
  const result = {
    sentiment: "Positive",
    category: "Cleanliness",
    reply:
      "Thank you for your valuable feedback. We are delighted that you enjoyed your stay.",
  };

  return (
    <div className="mt-8 bg-white rounded-2xl shadow-xl p-8">

      <h2 className="text-2xl font-bold mb-6">
        Analysis Result
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">

          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 text-left">Sentiment</th>
              <th className="p-3 text-left">Category</th>
              <th className="p-3 text-left">Suggested Reply</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-t">

              <td className="p-3">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
                  Positive
                </span>
              </td>

              <td className="p-3">
                {result.category}
              </td>

              <td className="p-3">
                {result.reply}
              </td>

            </tr>
          </tbody>

        </table>
      </div>

    </div>
  );
}

export default ResultTable;