const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const fruitRouter = require('./api/fruit/fruit.router');
const rootRouter = require('./api/root/root.router');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));

app.use('/', rootRouter);
app.use('/fruits', fruitRouter);

module.exports = app; 