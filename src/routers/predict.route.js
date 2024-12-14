// src/routers/predict.route.js

// Imports
const multer = require("multer");
const { Router } = require("express");
const { memoryStorage } = require("multer");
const {
	predictHandler,
	historiesHandler,
} = require("../handlers/predict.handler");
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
predictRoute.get("/histories", historiesHandler);

module.exports = predictRoute;
