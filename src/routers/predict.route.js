// src/routers/predict.route.js

// Imports
const multer = require("multer");
const { Router } = require("express");
const { memoryStorage } = require("multer");
const { predictHandler } = require("../handlers/predict.handler");
const { predictErrorMiddleware } = require("../middleware/error.middleware");
const storage = memoryStorage();
const upload = multer({ storage });
const predictRoute = Router();

predictRoute.post(
	"",
	predictErrorMiddleware,
	upload.single("image"),
	predictHandler
);

module.exports = predictRoute;
