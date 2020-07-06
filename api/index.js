var http = require('http');

http.createServer(function (req, res) {
    console.log('texto cualquiera');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Esta es la prueba final de git y node, si no RIP Katt');
    
}).listen(3000);

