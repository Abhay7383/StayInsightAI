const API = "http://localhost:5000/api/reviews";

// Get all reviews
export const getReviews = async () => {
  const res = await fetch(API);
  return await res.json();
};

// Save review
export const createReview = async (review) => {
  const res = await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(review),
  });

  return await res.json();
};

// Delete review
export const deleteReview = async (id) => {
  const res = await fetch(`${API}/${id}`, {
    method: "DELETE",
  });

  return await res.json();
};

// Update review
export const updateReview = async (id, data) => {
  const res = await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await res.json();
};