var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        var readStream = fs.createReadStream(__dirname + '/index_nature.html').pipe(res);
    }
    else{
        res.writeHead(404, {'Content-Type': 'text/html'});
        var readStream = fs.createReadStream(__dirname + '/error_page.html').pipe(res);
    }
});

server.listen(8000);

console.log('listening on port 8000');