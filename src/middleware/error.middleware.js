const { ContentTooLargeError, PredictError } = require("../utils/errors");

/**
 *
 * @param {Error} err
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
const predictErrorMiddleware = async (err, _, res, next) => {
	console.log("error middleware");
	console.error(`error: ${err.message}`);
	if (err instanceof ContentTooLargeError) {
		res.status(err.getStatusCode());
		res.json(err.getResponse());
		next();
		return;
	}

	const error = new PredictError();
	res.status(error.getStatusCode());
	res.json(error.getResponse());
	next();
};

module.exports = {
	predictErrorMiddleware,
};
