import { GoogleGenAI } from "@google/genai";

export const analyzeReviewWithAI = async (review) => {

  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });

 const prompt = `
You are an AI hotel review analysis assistant.

Analyze the guest review below.

Return ONLY valid JSON.

Do NOT use markdown.
Do NOT use \`\`\`.
Do NOT explain anything.

Rules:

- sentiment MUST be exactly one of:
  Positive
  Neutral
  Negative

- category should be one short word or phrase like:
  Service
  Staff
  Cleanliness
  Food
  Pricing
  Facilities
  Location
  Complaint
  General

Return exactly:

{
  "sentiment":"Positive",
  "category":"Service",
  "reply":"Thank you for your valuable feedback."
}


Review:
${review}
`;

  const response = await ai.models.generateContent({
    model: "gemini-3.5-flash",
    contents: prompt,
  });

  return response.text;
};