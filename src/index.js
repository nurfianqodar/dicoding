const dotenv = require("dotenv");
const express = require("express");
const predictRoute = require("./routers/predict.route");
const { loadModel } = require("./libs/tensorflow");
const { predictErrorMiddleware } = require("./middleware/error.middleware");

const app = express();
const appPort = process.env.APP_PORT;
dotenv.config();

app.use(express.json());

app.use("/predict", predictRoute);

app.use(predictErrorMiddleware);

app.listen(appPort, async () => {
	await loadModel();
	console.log(`Server running at port ${appPort}`);
});

process.on("SIGINT", () => {
	console.log("\nShutting down server...");
	console.log("Server has been shut down.");
	process.exit(0);
});
