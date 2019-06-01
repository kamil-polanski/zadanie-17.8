const http = require(`http`);
const fs = require(`fs`);

const server = http.createServer();

server.on(`request`, function(request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === `GET` && request.url === `/hello`) {
        fs.readFile(`./index.html`, function(err, item) {
            if (err) {
                console.log(err);
            }
            response.write(item);
            response.end();
        })
    } else {
        fs.readFile(`./img/404.jpg`, function(err, item) {
            if (err) {
                console.log(err);
            };
            response.writeHead(200, { "Content-Type": `image/jpg` });
            response.write(item);
            response.end();
        })
    };
});

server.listen(9000);