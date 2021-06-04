const http = require('http');
const express = require('express');
const login = express();
login.use = (express.json());
const porta = 3000;
login.set('port', porta);
const server = http.createServer(login);
server.listen(3000);

module.exports = server;


