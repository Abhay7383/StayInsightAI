const handleAnalyze = async () => {
  if (review.trim() === "") {
    alert("Please enter a review.");
    return;
  }

  setLoading(true);

  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/ai/analyze`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          review,
        }),
      }
    );

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.message || "AI analysis failed");
    }

    const analysis = result.data;

    await createReview({
      reviewerName: "Guest",
      reviewText: review,
      sentiment: analysis.sentiment,
      category: analysis.category,
      suggestedResponse: analysis.reply,
    });

    setReview("");

    if (loadReviews) {
      await loadReviews();
    }

    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);

  } catch (error) {
    console.error(error);
    alert(error.message || "Failed to analyze review.");
  } finally {
    setLoading(false);
  }
};