const app = require('./app');
const debug = require('debug')('app');

app.listen(8080, () =>{
	debug('Express server running on port 8080');
});