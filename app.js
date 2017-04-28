const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));

let fruits = [];

const rootHandler = (req, res, next) => {
	res.status(200).json({message: 'Welcome to Node API'});
}

const get = (req, res, next) => {
	res.status(200).json(fruits);
};
const create = (req, res, next) => {
	fruits.push(req.body);
	res.status(201).json(fruits);
};
const update = (req, res, next) => {};
const remove = (req, res, next) => {};

app.get('/fruits', get);
app.post('/fruits', create);
app.put('/fruits', update);
app.delete('/fruits', remove);

app.get('/', rootHandler);

module.exports = app;