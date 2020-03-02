const fs = require("fs");
const reqHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<header><title>The page</title></header>");
    res.write(
      '<body><form action="/ping" method="POST"><input type="text" name="pong"><button type="submit">send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/ping" && method === "POST") {
    const body = [];
    req.on("data", chunk => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on("end", () => {
      const parseBody = Buffer.concat(body).toString();
      console.log(parseBody);
      const msg = parseBody.split("=")[1];
      fs.writeFile("msg.txt", msg, err => {
        res.setHeader("location", "/");
        res.statusCode = 302;
        return res.end();
      });
    });
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<header><title> Ping..</title><header>");
  res.write("<body><h1> pong! </h1></body>");
  res.write("<html>");
  res.end();
};

// module.exports = reqHandler;

// module.exports = {
//     handler: reqHandler,
//     text: "Very buggy"
// }

module.exports.handler = reqHandler
// short cuts
exports.text = "Hum"