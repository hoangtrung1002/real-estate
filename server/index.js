const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/db");
const initRoutes = require("./routes");

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
initRoutes(app);
connectDB();

const PORT = process.env.PORT || 6666;

app.listen(PORT, () => console.log(`server is running ${PORT}`));
