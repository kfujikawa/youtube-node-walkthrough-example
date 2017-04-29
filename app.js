const express = require('express');
const app = express();
const debug = require('debug')('app');

require('./config/middleware.express')(app);
debug('Application middleware configured');

require('./config/routes')(app);
debug('Application routes loaded');

module.exports = app; 
debug('Application exported using module.exports');