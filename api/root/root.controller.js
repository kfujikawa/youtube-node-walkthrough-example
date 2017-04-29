function Controller () {};

Controller.prototype = {
rootHandler (req, res, next) {
	res
		.status(200)
		.json({
			message: 'Welcome to Node API'
		});
	}
};

module.exports = Controller;