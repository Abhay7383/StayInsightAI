# StayInsight AI

## AI-Powered Guest Review Sentiment Analyzer for Community Homestays

---

## Description

StayInsight AI is an AI-assisted full stack web application developed to help homestay owners and hospitality businesses analyze guest reviews efficiently. The system performs sentiment analysis on customer feedback, categorizes reviews, stores them in a cloud database, and provides meaningful insights for improving customer satisfaction.

The application enables users to register securely, log in using JWT authentication, manage guest reviews through a complete CRUD system, and visualize customer feedback through a clean and responsive interface.

---

# Problem Statement

Guest reviews are spread across multiple online platforms such as Google Reviews, Booking.com, Airbnb, TripAdvisor, and social media. Small homestay owners often lack the technical expertise and time required to manually analyze large volumes of customer feedback.

StayInsight AI solves this problem by automatically classifying reviews, identifying customer sentiment, organizing review data, and helping owners improve service quality through data-driven insights.

---

# Core Features

- AI-Based Sentiment Analysis
- Positive, Neutral and Negative Classification
- Review Theme Classification
- Automated Response Suggestions
- Complete Review CRUD Operations
- MongoDB Atlas Database Integration
- RESTful Backend APIs
- JWT Authentication
- User Registration & Login
- Protected Routes
- Review History Management
- Search Reviews
- Responsive User Interface
- Dark Mode Support
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
│   │
│   ├── utils/
│   │     analyzeReview.js
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── README.md
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

# Future Enhancements

- Google OAuth Login
- Gemini API Integration
- AI Review Summarization
- Multi-language Review Analysis
- Email Verification
- Forgot Password
- Admin Dashboard
- Analytics Dashboard
- PDF Report Export
- CSV Export
- Hotel Performance Insights

---

# Application Screenshots

- Home Page
- Login Page
- Registration Page
- Review Dashboard
- CRUD Operations
- MongoDB Database
- API Testing using Postman

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