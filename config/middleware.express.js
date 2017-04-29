const bodyParser = require('body-parser');

module.exports = (app) => {
	require('mongoose').Promise = Promise;
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({
		extended: false
	}));
}