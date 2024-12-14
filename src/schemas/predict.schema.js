const { v4 } = require("uuid");

class PredictResult {
	constructor(confidenceScore) {
		this.id = v4().toString();
		this.result = confidenceScore <= 0.5 ? "Non-cancer" : "Cancer";
		this.suggestion =
			confidenceScore <= 0.5
				? "Penyakit kanker tidak terdeteksi."
				: "Segera periksa ke dokter!";
		this.createdAt = new Date().toISOString();
	}
}

module.exports = {
	PredictResult,
};
