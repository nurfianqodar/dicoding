const newman = require("newman");

const BASE_DIR = "/home/fynn/Projects/dicoding/tests/e2e";
newman.run(
	{
		collection: `${BASE_DIR}/Asclepius.postman_collection.json`,
		reporters: "cli",
		envVar: [
			{
				key: "baseUrl",
				value: "https://backend-1039489937909.asia-southeast2.run.app",
			},
		],
		workingDir: `${BASE_DIR}/`,
		delayRequest: 2000,
	},
	(err) => {
		if (err) {
			console.error(err);
			process.exit();
		}
		console.log("done");
	}
);
