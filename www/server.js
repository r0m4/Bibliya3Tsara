const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
    fs.readFile('./index.html', function (err, content) {
        if (err) {
            res.statusCode = 500;
            res.end = ('Server error');
            dsflkbrt;
        } else {
            res.setHeader('Content-Type', 'text/html; charset=utf-8');
            res.end(content);
        }
    });
}).listen(3000, console.log('serving 3000'));