const http = require ('http');
const login = require ('./backend/login.js');
const port = process.env.PORT || 3000;
login.set('port', port);
const server = http.createServer(login);
server.listen(port);

module.exports = login;
export default login;
