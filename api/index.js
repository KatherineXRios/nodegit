var http = require('http');

http.createServer(function (req, res) {
    console.log('texto cualquiera');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Este texto lo cambio para probarlo, y si funciona bien si no, morir');
    
}).listen(3000);

