const router = require('express').Router();
const Controller = require('./root.controller');

const controller = new Controller();

router
	.route('/')
	.get(controller.rootHandler)

module.exports = router;