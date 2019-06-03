const express = require(`express`);
const path = require(`path`);
const colors = require(`colors`)
const app = express();

app.get(`/hello`, function(req, res) {

    res.sendFile(path.join(__dirname + `/index.html`));
});

app.get(`*`, function(req, res) {
    res.set(`Content-Type`, `image/jpg`)
    res.sendFile(path.join(__dirname + `/img/404.jpg`));
});

const server = app.listen(9000, function() {
    console.log(`Sever on`.green)
})


/*

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
*/