# StayInsight AI

## AI-Powered Guest Review Sentiment Analyzer for Community Homestays

---

## Description

StayInsight AI is an AI-assisted full stack web application developed to help homestay owners and hospitality businesses analyze guest reviews efficiently. The application uses **Google Gemini AI** to perform real-time sentiment analysis, classify guest review categories, and generate professional response suggestions. Reviews are securely stored in **MongoDB Atlas**, enabling users to manage customer feedback through a modern, responsive dashboard.

The application provides secure **JWT-based authentication**, complete **CRUD operations**, protected routes, AI-powered review analysis, loading indicators during AI requests, and user-friendly error handling.

---

# Problem Statement

Guest reviews are spread across multiple online platforms such as Google Reviews, Booking.com, Airbnb, TripAdvisor, and social media. Small homestay owners often lack the technical expertise and time required to manually analyze large volumes of customer feedback.

StayInsight AI solves this problem by automatically classifying reviews, identifying customer sentiment, organizing review data, and helping owners improve service quality through AI-driven insights.

---

# Core Features

- AI-powered Review Analysis using Google Gemini
- Sentiment Classification (Positive, Neutral, Negative)
- Automatic Review Category Detection
- AI-generated Response Suggestions
- Complete Review CRUD Operations
- MongoDB Atlas Integration
- RESTful Backend APIs
- JWT Authentication
- User Registration & Login
- Protected Routes
- Review History Management
- Search Reviews
- Responsive User Interface
- Dark Mode Support
- Loading Indicator During AI Processing
- Error Handling for AI Requests
- Secure API Key Storage using `.env`
- Component Library
- Future Google OAuth Support

---

# Technology Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- React Router DOM
- Context API

## Backend

- Node.js
- Express.js

## Database

- MongoDB Atlas
- Mongoose

## Authentication

- JWT (JSON Web Token)
- bcryptjs

## Artificial Intelligence

- Google Gemini API
- @google/genai SDK

## API Testing

- Postman
- Thunder Client

## Version Control

- Git
- GitHub

---

# REST API Endpoints

## Review APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/reviews | Get all reviews |
| GET | /api/reviews/:id | Get single review |
| POST | /api/reviews | Create review |
| PUT | /api/reviews/:id | Update review |
| DELETE | /api/reviews/:id | Delete review |
| GET | /api/reviews/search | Search reviews |

---

## Authentication APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /api/auth/register | Register User |
| POST | /api/auth/login | Login User |
| GET | /api/auth/profile | Protected User Profile |

---

## AI APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /api/ai/analyze | Analyze guest review using Gemini AI |

---

# Database

This project uses **MongoDB Atlas** together with **Mongoose ODM**.

## Why MongoDB?

- NoSQL document database
- Flexible schema
- Cloud-hosted using MongoDB Atlas
- Easy integration with Node.js
- Highly scalable
- Suitable for AI-generated review data

---

# Database Schema

## Review Collection

| Field | Type |
|------|------|
| reviewerName | String |
| reviewText | String |
| sentiment | String |
| category | String |
| suggestedResponse | String |
| createdAt | Date |

---

## User Collection

| Field | Type |
|------|------|
| name | String |
| email | String |
| password | Encrypted String |
| createdAt | Date |

---

# Authentication

The application implements JWT-based authentication.

### Features

- User Registration
- User Login
- Secure Password Hashing
- JWT Token Generation
- Protected Backend APIs
- Protected Frontend Pages
- Logout Functionality

---

# AI Workflow

1. User enters a guest review.
2. Frontend sends the review to **POST /api/ai/analyze**.
3. Backend securely calls the Google Gemini API.
4. Gemini analyzes the review.
5. AI returns:
   - Sentiment
   - Review Category
   - Professional Reply Suggestion
6. Review is stored in MongoDB Atlas.
7. Results are displayed in the frontend.

---

# Project Structure

```text
StayInsightAI/
│
├── backend/
│   ├── config/
│   │     db.js
│   │
│   ├── controllers/
│   │     authController.js
│   │     reviewController.js
│   │     aiController.js
│   │
│   ├── middleware/
│   │     authMiddleware.js
│   │     errorMiddleware.js
│   │
│   ├── models/
│   │     Review.js
│   │     User.js
│   │
│   ├── routes/
│   │     authRoutes.js
│   │     reviewRoutes.js
│   │     aiRoutes.js
│   │
│   ├── services/
│   │     geminiService.js
│   │
│   ├── utils/
│   │     generateToken.js
│   │
│   ├── .env.example
│   ├── package.json
│   └── server.js
│
├── src/
│   ├── components/
│   │     Navbar.jsx
│   │     ProtectedRoute.jsx
│   │     ReviewForm.jsx
│   │     ResultTable.jsx
│   │
│   ├── context/
│   │     AuthContext.jsx
│   │
│   ├── pages/
│   │     Home.jsx
│   │     Login.jsx
│   │     Register.jsx
│   │
│   ├── services/
│   │     authService.js
│   │     reviewService.js
│   │     geminiService.js
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── README.md
├── PROMPTS.md
└── package.json
```

---

# Backend Setup

## Clone Repository

```bash
git clone https://github.com/yourusername/StayInsightAI.git
```

---

## Install Backend Dependencies

```bash
cd backend
npm install
```

---

## Configure Environment Variables

Create a `.env` file.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

GEMINI_API_KEY=your_google_gemini_api_key
```

---

## Run Backend

```bash
npm run dev
```

Backend URL

```
http://localhost:5000
```

---

# Frontend Setup

Install dependencies

```bash
npm install
```

Run project

```bash
npm run dev
```

Frontend URL

```
http://localhost:5173
```

---

# Current Development Status

## Week 2

- React + Vite Setup
- Tailwind CSS
- Navbar
- Review Form
- Result Interface

---

## Week 3

- Component Library
- Button Component
- Input Component
- Modal Component
- Toast Component
- Loader Component

---

## Week 4

- Complete REST API
- CRUD Operations
- MongoDB Atlas Integration
- Error Handling Middleware
- API Testing using Postman
- Frontend Connected with Backend

---

## Week 5

- Database Integration
- Review Schema
- CRUD Verification
- Search API
- MongoDB Deployment

---

## Week 6

- User Authentication
- JWT Authorization
- Login Page
- Registration Page
- Auth Context
- Protected Routes
- Password Encryption using bcryptjs
- Protected Backend APIs
- Secure API Access

---

## Week 7

- Google Gemini AI Integration
- AI-powered Review Analysis
- Sentiment Classification
- Automatic Category Detection
- AI-generated Response Suggestions
- Secure Backend API Integration
- Loading State During AI Requests
- Error Handling for Failed Requests
- Backend AI Endpoint (`POST /api/ai/analyze`)
- Frontend Connected with AI Backend
- End-to-End AI Review Analysis

---

# Future Enhancements

- Google OAuth Login
- Multi-language Review Analysis
- AI Review Summarization
- Admin Dashboard
- Analytics Dashboard
- Review Trend Analysis
- PDF Report Export
- CSV Export
- Hotel Performance Insights

---

# Application Screenshots

- Home Page
- Login Page
- Registration Page
- AI Review Analysis Screen
- Loading State During AI Processing
- AI-generated Analysis Output
- CRUD Operations
- MongoDB Atlas Database
- API Testing using Postman
- Browser Network Tab showing `POST /api/ai/analyze (200 OK)`

---

# Internship Program

Technology Business Incubator (TBI)

Graphic Era University

Summer Internship Program 2026

---

# Author

**Abhay Joshi**

B.Tech Student

Full Stack Web Developer

AI Enthusiast

---

# License

This project is developed for educational and internship purposes under the Technology Business Incubator (TBI), Graphic Era University.