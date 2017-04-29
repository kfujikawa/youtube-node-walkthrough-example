const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const fruitRouter = require('./api/fruit/fruit.router');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));

const rootHandler = (req, res, next) => {
	res.status(200).json({message: 'Welcome to Node API'});
};

app.use('/fruits', fruitRouter);

//Root Handler
app.get('/', rootHandler);

module.exports = app; 