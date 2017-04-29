const Fruit = require('./fruit.model');

function Controller () {};

function findById (id) {
	for(let i = 0; i < fruits.length; i+=1){
		if(fruits[i].id === id){
			return i;
		}
	}
};

Controller.prototype = {
	get (req, res, next) {
		Fruit.find({}).then((fruits) => {
			res.status(200).json(fruits);
		}).catch((error) => next(error));
	},

	create (req, res, next) {
		Fruit.create(req.body).then((fruit) => {
			res.status(201).json(fruit);
		}).catch((error) => next(error));
	},

	update (req, res, next) {
		Fruit.findByIdAndUpdate(req.body.id, req.body).then((fruit) => {
			res.status(201).json(fruit);
		}).catch((error) => next(error));
	},

	remove (req, res, next) {
		Fruit.findByIdAndRemove(req.body.id).then((fruit) => {
			res.sendStatus(204);
		}).catch((error) => next(error));
	},

	findOne (req, res, next){
		Fruit.findOne(req.body.id).then((fruit)=> {
			res.status(200).json(fruit);
		}).catch((error) => next(error));
	}
}

module.exports = Controller;