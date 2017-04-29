const express = require('express');
const app = express();

require('./config/middleware.express')(app);
require('./config/routes')(app);

module.exports = app; 