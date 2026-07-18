# PROMPTS.md

# StayInsight AI

## AI Prompt Testing Log

---

# Prompt Variation 1

## Prompt

```
Analyze the following hotel review.

Return:
Sentiment
Category
Suggested Reply
```

### Example Input

```
The room was very clean and the staff were polite.
```

### Example Output

```
{
  "sentiment":"Positive",
  "category":"Cleanliness",
  "reply":"Thank you for your valuable feedback. We are delighted that you enjoyed your stay."
}
```

---

# Prompt Variation 2

## Prompt

```
You are a hotel review assistant.

Analyze this review and classify its sentiment.

Return only JSON.

{
"sentiment":"",
"category":"",
"reply":""
}
```

### Example Input

```
The room was okay but the breakfast was disappointing.
```

### Example Output

```
{
"sentiment":"Neutral",
"category":"Food",
"reply":"Thank you for your feedback. We appreciate your comments and will work on improving our breakfast service."
}
```

---

# Prompt Variation 3 (Final Prompt)

## Prompt

```
You are an AI assistant for StayInsight AI.

Analyze guest reviews.

Return ONLY valid JSON.

{
"sentiment":"",
"category":"",
"reply":""
}

Review:
<review text>
```

### Example Input

```
The room was dirty and the staff ignored our complaints.
```

### Example Output

```
{
"sentiment":"Negative",
"category":"Cleanliness",
"reply":"We sincerely apologize for your experience. Your feedback has been shared with our management team, and we will take immediate corrective action."
}
```

---

# Best Prompt

Prompt Variation 3 produced the most consistent responses because it explicitly instructed Gemini to return only valid JSON. This reduced formatting errors and eliminated unnecessary explanations. It also generated more accurate sentiment labels and professional response suggestions suitable for hospitality businesses.

---

# System Prompt

```
You are an intelligent hospitality review analysis assistant.

Your task is to analyze guest reviews.

Always return ONLY valid JSON.

Classify sentiment as:
Positive
Neutral
Negative

Identify the most relevant review category.

Generate a professional response suitable for a hotel or homestay owner.
```