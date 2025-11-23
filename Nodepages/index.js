const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  let filePath = "";
  //matching page in server
  //when user clicks a particuler page
  switch (req.url) {
    case "/":
      filePath = "index.html";
      break;
    case "/about":
      filePath = "about.html";
      break;
    case "/contact.html":
      filePath = "contact.html";
      break;
    default:
      filePath = "404.html";
      break;
  }

  //Read and serve file
  fs.readFile(path.join(__dirname, filePath), (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/html" });
      return res.end("Server Error");
    }

    res.writeHead(200, { "Content-type": "text/html" });
    res.end(data);
  });
});

server.listen(8080, () => {
  console.log("Server running at  http://localhost:8080");
});
