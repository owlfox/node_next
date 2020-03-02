// http/https, fs, path, os
const http = require("http");
const routes = require("./routes");

const server = http.createServer(routes.handler);
// console.log(req.url, req.method, req.headers)

server.listen("2999");
