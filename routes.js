const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
      
    res.setHeader("Content-Type", "text/html");
    res.write(
      '<html><body><form action="/message" method= "POST"><input type ="text" name="message"></input><button type="submit">Send</button></form></body></html>'
    );
    res.end();
    return res.end();
  }
  if (url === "/message" && method == "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on("end", () => {
        
      const parseBody = Buffer.concat(body).toString();
      const message = parseBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
       
      });
    });
  }
};

module.exports.handler = requestHandler;
