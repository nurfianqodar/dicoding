const tf = require("@tensorflow/tfjs-node");
const { getModel } = require("../libs/tensorflow");
const { PredictError, ContentTooLargeError } = require("../utils/errors");
const { PredictResult } = require("../schemas/predict.schema");
const HTTPResponse = require("../utils/response");
/**
 * **predictHandler**
 *
 * Handle upload image for prediction
 * Use multer middleware!!
 *
 * @type {import("express").Handler}
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const predictHandler = async (req, res, next) => {
	// Validate Image
	const image = req.file;
	if (!image) {
		console.log("image is empty");
		next(new PredictError());
		return;
	}
	if (image.size > 1_000_000) {
		next(new ContentTooLargeError());
		return;
	}
	try {
		// Preprocess Image
		const imageTensor = tf.node
			.decodeJpeg(image.buffer)
			.resizeNearestNeighbor([224, 224])
			.expandDims()
			.toFloat();

		// Predict Image
		const predict = (await getModel()).predict(imageTensor);
		const score = await predict.data();
		const confidenceScore = Math.max(...score);
		console.log("Confidence Score:", confidenceScore);

		// Predict Interpretation
		const predictResult = new PredictResult(confidenceScore);
		const response = new HTTPResponse(
			201,
			"success",
			"Model is predicted successfully",
			predictResult
		);
		res.status(response.getStatusCode());
		res.json(response.getResponse());
	} catch {
		next(new PredictError());
	}
};

module.exports = { predictHandler };
