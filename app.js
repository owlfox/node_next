// http/https, fs, path, os
const http = require('http')


const server = http.createServer((req, res) => {
    // console.log(req.url, req.method, req.headers)
    const url = req.url
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html')
        res.write("<html>")
        res.write("<header><title>The page</title></header>")
        res.write('<body><form action="/ping" method="POST"><input type="text" name="pong"><button type="submit">send</button></form></body>')
        res.write("</html>")
        return res.end()
    }
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<header><title> Ping..</title><header>')
    res.write('<body><h1> pong! </h1></body>')
    res.write('<html>')
})

server.listen('2999')