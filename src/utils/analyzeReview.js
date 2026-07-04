export function analyzeReview(review) {

    let sentiment = "Neutral";
    let category = "General";

    const text = review.toLowerCase();

    if (
        text.includes("good") ||
        text.includes("excellent") ||
        text.includes("great") ||
        text.includes("amazing") ||
        text.includes("clean") ||
        text.includes("friendly")
    ) {
        sentiment = "Positive";
        category = "Service";
    }

    if (
        text.includes("bad") ||
        text.includes("poor") ||
        text.includes("dirty") ||
        text.includes("worst") ||
        text.includes("late")
    ) {
        sentiment = "Negative";
        category = "Complaint";
    }

    let suggestedResponse =
        "Thank you for your valuable feedback.";

    if (sentiment === "Positive") {
        suggestedResponse =
            "Thank you for your wonderful feedback! We are delighted you enjoyed your stay.";
    }

    if (sentiment === "Negative") {
        suggestedResponse =
            "We sincerely apologize for your experience. We will work on improving our service.";
    }

    return {
        sentiment,
        category,
        suggestedResponse
    };
}