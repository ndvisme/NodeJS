const http = require('http');
const routes = require('./routes');

const server = http.createServer(routes.handler);

// test 2
server.listen(3000); 
 
