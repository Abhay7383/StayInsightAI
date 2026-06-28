import { deleteReview } from "../services/reviewService";

function ResultTable({ reviews, loadReviews }) {

  const removeReview = async(id)=>{
      await deleteReview(id);
      loadReviews();
  }

  return (

    <div className="mt-10 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">

      <h2 className="text-2xl font-bold mb-6">
        Saved Reviews
      </h2>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="p-3">Reviewer</th>

              <th className="p-3">Review</th>

              <th className="p-3">Sentiment</th>

              <th className="p-3">Category</th>

              <th className="p-3">Reply</th>

              <th className="p-3">Action</th>

            </tr>

          </thead>

          <tbody>

          {

          reviews.length===0 ?

          (

            <tr>

              <td
              colSpan="6"
              className="text-center p-5"
              >

                No Reviews Yet

              </td>

            </tr>

          )

          :

          reviews.map((review)=>(

            <tr
            key={review._id}
            className="border-b"
            >

              <td className="p-3">
                {review.reviewerName}
              </td>

              <td className="p-3">
                {review.reviewText}
              </td>

              <td className="p-3">

                <span
                className={`px-3 py-1 rounded-full text-white

                ${
                review.sentiment==="Positive"
                ? "bg-green-500"

                :review.sentiment==="Negative"

                ? "bg-red-500"

                :"bg-yellow-500"

                }
                `}
                >

                  {review.sentiment}

                </span>

              </td>

              <td className="p-3">
                {review.category}
              </td>

              <td className="p-3">
                {review.suggestedResponse}
              </td>

              <td>

                <button

                onClick={()=>removeReview(review._id)}

                className="bg-red-500 text-white px-3 py-1 rounded"

                >

                  Delete

                </button>

              </td>

            </tr>

          ))

          }

          </tbody>

        </table>

      </div>

    </div>

  );
}

export default ResultTable;