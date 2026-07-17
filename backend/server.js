import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import aiRoutes from "./routes/aiRoutes.js";
import connectDB from "./config/db.js";
import reviewRoutes from "./routes/reviewRoutes.js";
import errorHandler from "./middleware/errorMiddleware.js";

dotenv.config();
console.log("ENV PATH LOADED");
console.log("PORT =", process.env.PORT);
// console.log("GEMINI =", process.env.GEMINI_API_KEY);
// console.log("GEMINI_API_KEY exists:", !!process.env.GEMINI_API_KEY);
// console.log("First 8 chars:", process.env.GEMINI_API_KEY?.substring(0, 8));

// Connect Database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "StayInsight AI Backend Running",
  });
});

// Review Routes
app.use("/api/reviews", reviewRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/ai", aiRoutes);

// Error Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});