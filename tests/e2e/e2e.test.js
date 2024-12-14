const newman = require("newman");

const BASE_DIR = "/home/fynn/Projects/dicoding/tests/e2e";
newman.run(
	{
		collection: `${BASE_DIR}/Asclepius.postman_collection.json`,
		reporters: "cli",
		envVar: [{ key: "baseUrl", value: "http://127.0.0.1:8000" }],
		workingDir: `${BASE_DIR}/`,
	},
	(err) => {
		if (err) {
			console.error(err);
			process.exit();
		}
		console.log("done");
	}
);
