let fruits = [];

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
		res
			.status(200)
			.json(fruits);
	},

	create (req, res, next) {
		let fruit = req.body;
		fruit.id = Math.floor(Math.random() * 50000);
		fruits.push(fruit);
		res
			.status(201)
			.json(fruits);
	},

	update (req, res, next) {
		const index = findById(req.body.id);
		fruits[index].name = req.body.name;
		res
			.status(201)
			.json(fruits);
	},

	remove (req, res, next) {
		const index = findById(req.body.id);
		fruits.splice(index, 1);
		res
			.status(200)
			.json(fruits);
	},

	findOne (req, res, next){
		const index = findById(parseInt(req.params.id));
		res
			.status(201)
			.json(fruits[index]);
	}
}

module.exports = Controller;