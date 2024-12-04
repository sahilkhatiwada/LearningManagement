import dotenv from "dotenv";
import express from "express";
import connectDB from "./database/dbConnect.js";
import cors from "cors";
import userRoute from "./routes/user.route.js";
import cookieParser from "cookie-parser";

dotenv.config({});

// call database connection here

connectDB();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:5173', // Allow requests from this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  credentials: true, // Allow credentials (optional, if needed)
}))

// apis
app.use("/api/v1/user", userRoute);



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
