const http = require('http'); // import built in http module
const routes = require('./routes'); // import my js file from porject

// create server with routes by given url
const server = http.createServer(routes.handler); 


server.listen(3000); // listen for requests on port 3000