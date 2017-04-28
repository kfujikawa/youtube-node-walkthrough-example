const express = require('express');

const app = express();

const rootHandler = (req, res, next) => {
	res.status(200).json({message: 'Welcome to Node API'});
}

app.get('/', rootHandler);

module.exports = app;