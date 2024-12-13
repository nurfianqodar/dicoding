const dotenv = require("dotenv");
const express = require("express");
const app = express();
dotenv.config();
const port = process.env.APP_PORT;

app.listen(port, () => {
	console.log(`Server running at port ${port}`);
});

process.on("SIGINT", () => {
	console.log("\nShutting down server...");
	console.log("Server has been shut down.");
	process.exit(0);
});
