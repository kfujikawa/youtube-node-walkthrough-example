const router = require('express').Router();
const Controller = require('./fruit.controller');

const controller = new Controller();

router.route('/') // /fruits
	.get(controller.get)
	.post(controller.create)
	.put(controller.update)
	.delete(controller.remove);

// Find by ID
router.route('/:id') 
	.get(controller.findOne);

module.exports = router;