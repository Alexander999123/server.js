const http = require('http');
const app = require('./app.js');

const port = process.env.PORT || 3000;

console.log('server is started');

http.createServer(app).listen(port);
