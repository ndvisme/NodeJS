const http = require('http');
const routes = require('./routes');

const server = http.createServer(routes.handler);

// test
server.listen(3000); 
 
