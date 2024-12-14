const dotenv = require("dotenv");
const { loadGraphModel } = require("@tensorflow/tfjs-node");

dotenv.config();

/**
 * @type {import("@tensorflow/tfjs-node").GraphModel | null}
 */
let model = null;

/**
 * **loadModel**
 *
 * Load ML model
 *
 * @returns {Promise<undefined>}
 */
const loadModel = async () => {
	if (!model) {
		const modelUrl = process.env.MODEL_URL;
		if (!modelUrl) {
			console.error("model url not set");
			process.exit(1);
		}
		console.log(`Loading model from ${modelUrl}`);
		try {
			model = await loadGraphModel(modelUrl);
		} catch (err) {
			console.error("Load model error:", err);
			process.exit(1);
		}
	}
};

/**
 *
 * @returns {Promise<import("@tensorflow/tfjs-node").GraphModel>}
 */
const getModel = async () => {
	if (!model) {
		await loadModel();
	}
	return model;
};

module.exports = { getModel, loadModel };
