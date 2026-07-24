import Groq from "groq-sdk";

export const analyzeReviewWithAI = async (review) => {

  // Create Groq client
  const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
  });

  // Prompt
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

Return exactly this JSON format:

{
  "sentiment":"Positive",
  "category":"Service",
  "reply":"Thank you for your valuable feedback."
}

Review:
${review}
`;

  const completion = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",

    temperature: 0.2,

    messages: [
      {
        role: "system",
        content:
          "You are an AI assistant that ALWAYS returns ONLY valid JSON. Never use markdown, code fences, or explanations.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  return completion.choices[0].message.content;
};