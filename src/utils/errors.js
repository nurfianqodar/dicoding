const HTTPResponse = require("./response");

class ContentTooLargeError extends Error {
	constructor() {
		super("Payload content length greater than maximum allowed: 1000000");
	}
	getResponse() {
		return new HTTPResponse(
			this.getStatusCode,
			"fail",
			this.message
		).getResponse();
	}

	getStatusCode() {
		return 413;
	}
}

class PredictError extends Error {
	constructor() {
		super("Terjadi kesalahan dalam melakukan prediksi");
	}
	getResponse() {
		return new HTTPResponse(
			this.getStatusCode,
			"fail",
			this.message
		).getResponse();
	}

	getStatusCode() {
		return 400;
	}
}

module.exports = { ContentTooLargeError, PredictError };
