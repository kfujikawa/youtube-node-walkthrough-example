const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));

let fruits = [];

const findById = (id) => {
	for(let i = 0; i < fruits.length; i+=1){
		if(fruits[i].id === id){
			return i;
		}
	}
}

const rootHandler = (req, res, next) => {
	res.status(200).json({message: 'Welcome to Node API'});
}

const get = (req, res, next) => {
	res.status(200).json(fruits);
};
const create = (req, res, next) => {
	let fruit = req.body;
	fruit.id = Math.floor(Math.random() * 50000);
	fruits.push(fruit);
	res.status(201).json(fruits);
};
const update = (req, res, next) => {
	const index = findById(req.body.id);
	fruits[index].name = req.body.name;
	res.status(201).json(fruits);
};
const remove = (req, res, next) => {
	const index = findById(req.body.id);
	fruits.splice(index, 1);
	res.status(200).json(fruits);
};

const findOne = (req, res, next) => {
	const index = findById(parseInt(req.params.id));
	res.status(201).json(fruits[index]);
};


app.get('/fruits', get);
app.post('/fruits', create);
app.put('/fruits', update);
app.delete('/fruits', remove);

// Find by ID
app.get('/fruits/:id', findOne);

//Root Handler
app.get('/', rootHandler);

module.exports = app;