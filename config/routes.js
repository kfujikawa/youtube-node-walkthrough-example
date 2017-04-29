const fruitRouter = require('../api/fruit/fruit.router');
const rootRouter = require('../api/root/root.router');

module.exports = (app) =>{
	app.use('/', rootRouter);
	app.use('/fruits', fruitRouter);
}