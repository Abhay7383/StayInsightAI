# StayInsight AI

## AI-Powered Guest Review Sentiment Analyzer

StayInsight AI is a full-stack AI-powered web application that helps homestay owners and hospitality businesses analyze guest reviews automatically. The application uses Large Language Models (LLMs) through the **Groq API** to identify review sentiment, categorize feedback, and generate professional reply suggestions. Reviews are securely stored in MongoDB Atlas and can be managed through a responsive dashboard.

---

# Live Demo

### Frontend

https://stay-insight-ai-kwe3.vercel.app

### Backend

https://stayinsightai.onrender.com

API Base URL

```
https://stayinsightai.onrender.com/api
```

---

# Problem Statement

Guest reviews are often spread across multiple platforms such as Google Reviews, Airbnb, Booking.com, TripAdvisor, and social media. Reading every review manually is time-consuming and makes it difficult to identify recurring issues.

StayInsight AI automates this process by using AI to:

- Analyze customer sentiment
- Categorize reviews
- Generate professional responses
- Store review history
- Help owners improve customer satisfaction

---

# Features

## Authentication

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Password Encryption using bcryptjs

---

## AI Review Analysis

- AI-powered sentiment analysis
- Review category detection
- AI-generated professional reply
- Loading state while AI is processing
- Error handling for failed AI requests

---

## Review Management

- Create Reviews
- View Reviews
- Update Reviews
- Delete Reviews
- Search Reviews
- Persistent MongoDB storage

---

## User Interface

- Responsive Design
- Dark Mode
- Clean Dashboard
- Empty State Design
- Loading Indicators

---

# Technology Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- Context API

---

## Backend

- Node.js
- Express.js

---

## Database

- MongoDB Atlas
- Mongoose

---

## Authentication

- JWT
- bcryptjs

---

## Artificial Intelligence

- Groq API
- Llama 3.3 70B Versatile Model

---

## Deployment

- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

---

## Version Control

- Git
- GitHub

---

# REST API

## Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /api/auth/register | Register User |
| POST | /api/auth/login | Login User |
| GET | /api/auth/profile | User Profile |

---

## Reviews

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/reviews | Get All Reviews |
| GET | /api/reviews/:id | Get Single Review |
| POST | /api/reviews | Create Review |
| PUT | /api/reviews/:id | Update Review |
| DELETE | /api/reviews/:id | Delete Review |
| GET | /api/reviews/search | Search Reviews |

---

## AI

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /api/ai/analyze | Analyze Guest Review |

---

# Database Schema

## User

| Field | Type |
|-------|------|
| name | String |
| email | String |
| password | String |
| createdAt | Date |

---

## Review

| Field | Type |
|-------|------|
| reviewerName | String |
| reviewText | String |
| sentiment | String |
| category | String |
| suggestedResponse | String |
| createdAt | Date |

---

# AI Workflow

1. User logs into the application.
2. User enters a guest review.
3. Frontend sends the review to the backend.
4. Backend securely calls the Groq API.
5. AI analyzes the review.
6. AI returns:

- Sentiment
- Review Category
- Suggested Reply

7. Review is stored in MongoDB Atlas.
8. Results are displayed on the dashboard.

---

# Project Structure

```text
StayInsightAI
│
├── backend
│   ├── config
│   │   └── db.js
│   │
│   ├── controllers
│   │   ├── aiController.js
│   │   ├── authController.js
│   │   └── reviewController.js
│   │
│   ├── middleware
│   │   ├── authMiddleware.js
│   │   └── errorMiddleware.js
│   │
│   ├── models
│   │   ├── Review.js
│   │   └── User.js
│   │
│   ├── routes
│   │   ├── aiRoutes.js
│   │   ├── authRoutes.js
│   │   └── reviewRoutes.js
│   │
│   ├── services
│   │   └── aiService.js
│   │
│   ├── utils
│   │   └── generateToken.js
│   │
│   ├── .env.example
│   ├── package.json
│   └── server.js
│
├── public
│
├── src
│   ├── components
│   ├── context
│   ├── pages
│   ├── services
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
├── README.md
└── vite.config.js
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/Abhay7383/StayInsightAI.git

cd StayInsightAI
```

---

# Backend Setup

```bash
cd backend

npm install

npm run dev
```

Backend runs on

```
http://localhost:5000
```

---

### Backend Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

GROQ_API_KEY=your_groq_api_key
```

---

# Frontend Setup

```bash
npm install

npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

### Frontend Environment Variable

Create a `.env` file in the project root.

```env
VITE_API_URL=http://localhost:5000/api
```

---

# Deployment

## Live Frontend

https://stay-insight-ai-kwe3.vercel.app

---

## Live Backend

https://stayinsightai.onrender.com

---

## Deployment Platforms

| Service | Platform |
|----------|----------|
| Frontend | Vercel |
| Backend | Render |
| Database | MongoDB Atlas |
| AI Model | Groq |

---

## Known Limitations (Free Tier)

- Render free web services spin down after approximately 15 minutes of inactivity. The first request after idle may take 30–60 seconds.
- MongoDB Atlas M0 cluster has limited storage and shared resources.
- Groq free API has request limits and may occasionally return rate-limit errors during heavy traffic.
- Vercel Hobby plan has bandwidth and build limits suitable for personal and educational projects.

---

# Future Enhancements

- Google OAuth Login
- AI Review Summarization
- Multi-language Support
- Analytics Dashboard
- Review Trends
- PDF Export
- CSV Export
- Hotel Performance Dashboard
- Admin Panel

---

# Screenshots

Include the following screenshots:

- Home Page
- Login Page
- Registration Page
- AI Review Analysis
- Loading State
- CRUD Dashboard
- MongoDB Atlas
- Postman API Testing
- Deployment Dashboard
- Responsive Mobile View

---

# Author

**Abhay Joshi**

B.Tech Student

Full Stack Web Developer

AI Enthusiast

GitHub:
https://github.com/Abhay7383

---

# License

This project was developed as part of the **Technology Business Incubator (TBI), Graphic Era University Summer Internship Program 2026** for educational purposes.