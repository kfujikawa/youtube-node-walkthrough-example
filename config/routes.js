const fruitRouter = require('../api/fruit/fruit.router');
const rootRouter = require('../api/root/root.router');
const errors = require('./errors');

module.exports = (app) =>{
	app.use('/', rootRouter);
	app.use('/fruits', fruitRouter);
	app.use(errors);
}