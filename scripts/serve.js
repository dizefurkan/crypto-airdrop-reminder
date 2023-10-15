const http = require("node:http");
const path = require("path");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  // HTML dosyasının yolu
  const filePath = path.join(__dirname, "/../index.html");

  // Dosya var mı kontrol edin
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      // Dosya yoksa 404 hatası gönderin
      res.statusCode = 404;
      res.end("404 Not Found");
      return;
    }

    // Dosyayı okuyun ve yanıt olarak gönderin
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end("Internal Server Error");
      } else {
        res.setHeader("Content-Type", "text/html");
        res.end(data);
      }
    });
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
