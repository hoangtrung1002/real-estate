import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/db.js";

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

const PORT = process.env.PORT || 6666;

app.listen(PORT, () => console.log(`server is running ${PORT}`));
