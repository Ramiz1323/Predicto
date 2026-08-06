const express = require("express");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/auth.routes.js");
const songRoutes = require("./routes/song.routes.js");
const cors = require("cors");

const app = express();
app.use(cors({
    origin: process.env.FRONTEND_URL || "https://predicto.skramizraza.tech" ||"http://localhost:5173",
    credentials: true,
}));

//Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));


//Routes
app.use("/api/auth", authRoutes);
app.use("/api/songs", songRoutes);

module.exports = app;