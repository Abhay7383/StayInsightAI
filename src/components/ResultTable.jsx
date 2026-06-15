function ResultTable({ result }) {
  if (!result) return null;

  return (
    <div className="bg-white p-5 rounded shadow mt-5">
      <h2 className="text-xl font-bold mb-4">
        Analysis Result
      </h2>

      <table className="w-full border">
        <tbody>
          <tr>
            <td className="border p-2 font-bold">
              Sentiment
            </td>
            <td className="border p-2">
              {result.sentiment}
            </td>
          </tr>

          <tr>
            <td className="border p-2 font-bold">
              Category
            </td>
            <td className="border p-2">
              {result.category}
            </td>
          </tr>

          <tr>
            <td className="border p-2 font-bold">
              Suggested Reply
            </td>
            <td className="border p-2">
              {result.reply}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ResultTable;