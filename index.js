'use strict'

// use external modules
require('dotenv').config();

// bring in our server
const server = require('./src/server.js');

// start server
server.start(process.env.PORT || 3000);