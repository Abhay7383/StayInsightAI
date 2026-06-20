import { useState } from "react";

import {
  Button,
  Modal,
  Toast,
  Loader,
} from "./ui";

function ReviewForm() {
  const [review, setReview] = useState("");
  const [showModal, setShowModal] =
    useState(false);

  const [showToast, setShowToast] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const handleAnalyze = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setShowToast(true);

      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    }, 2000);
  };

  return (
    <>
      <div className="bg-white text-black p-6 rounded-xl shadow
                dark:bg-gray-800 dark:text-white">

        <h2 className="text-2xl font-bold mb-4">
          Guest Review Analysis
        </h2>

        <textarea
          rows="5"
          value={review}
          onChange={(e) =>
            setReview(e.target.value)
          }
          placeholder="Enter guest review..."
          className="
            w-full
            border
            rounded-lg
            p-4
            mb-4
          "
        />

        <div className="flex gap-3">

          <Button
            onClick={handleAnalyze}
          >
            Analyze Review
          </Button>

          <Button
            className="bg-gray-600 hover:bg-gray-700"
            onClick={() =>
              setShowModal(true)
            }
          >
            Open Modal
          </Button>

        </div>

        {loading && <Loader />}

      </div>

      <Modal
        isOpen={showModal}
        onClose={() =>
          setShowModal(false)
        }
        title="Project Information"
      >
        <p>
          StayInsight AI helps
          homestay owners analyze
          customer reviews.
        </p>
      </Modal>

      {showToast && (
        <Toast
          message="Review analyzed successfully!"
          type="success"
        />
      )}
    </>
  );
}

export default ReviewForm;