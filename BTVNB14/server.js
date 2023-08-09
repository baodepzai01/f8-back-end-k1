const http = require("http");
const fs = require("fs");

const JSON_FILE_PATH = "data.json";

const hostname = "127.0.0.1";
const pattern = /\/*$/; //regex
const pathname = url.pathname.replace(pattern, "");
const port = 3000;
url = url.parse(req.url);

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/api/activate-phone") {
    let data = "";

    req.on("data", (chunk) => {
      data += chunk;
    });

    req.on("end", () => {
      const { phone, otp } = JSON.parse(data);

      const jsonData = JSON.parse(fs.readFileSync(JSON_FILE_PATH, "utf8"));

      jsonData.active.push(phone);

      jsonData.focus.phone = phone;

      jsonData.otp = jsonData.otp.concat(otp);

      fs.writeFileSync(
        JSON_FILE_PATH,
        JSON.stringify(jsonData, null, 2),
        "utf8"
      );

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          message: "Số điện thoại đã được active và lưu vào JSON.",
        })
      );
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
  res.statusCode = 200;
  if (pathname === "/") {
    home.index(req, res);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
