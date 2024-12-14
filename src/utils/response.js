class HTTPResponse {
	constructor(status_code, status, message = undefined, data = undefined) {
		this.status_code = status_code;
		this.status = status;
		this.message = message;
		this.data = data;
	}

	getStatusCode() {
		return this.status_code;
	}

	getResponse() {
		const res = {
			status: this.status,
		};
		if (this.message) {
			res.message = this.message;
		}
		if (this.data) {
			res.data = this.data;
		}
		return res;
	}
}

module.exports = HTTPResponse;
