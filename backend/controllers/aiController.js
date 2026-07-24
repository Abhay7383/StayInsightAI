import { analyzeReviewWithAI } from "../services/aiService.js";

export const analyzeReview = async (req, res) => {
  try {
    const { review } = req.body;

    if (!review || review.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Review is required",
      });
    }

    // Get AI response
    const aiResponse = await analyzeReviewWithAI(review);

    // Remove markdown if Gemini returns ```json ... ```
    const cleanedResponse = aiResponse
      .replace(/```json/gi, "")
      .replace(/```/g, "")
      .trim();

    let analysis;

    try {
      analysis = JSON.parse(cleanedResponse);
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: "Gemini returned invalid JSON.",
        raw: cleanedResponse,
      });
    }

    // Normalize sentiment
    if (analysis.sentiment) {
      const sentiment = analysis.sentiment.toLowerCase();

      if (sentiment === "positive") {
        analysis.sentiment = "Positive";
      } else if (sentiment === "negative") {
        analysis.sentiment = "Negative";
      } else {
        analysis.sentiment = "Neutral";
      }
    }

    // Default values if AI misses any field
    analysis.category = analysis.category || "General";
    analysis.reply =
      analysis.reply ||
      "Thank you for your valuable feedback. We appreciate your review.";

    return res.status(200).json({
      success: true,
      data: analysis,
    });

  } catch (error) {
    console.error("AI Controller Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};