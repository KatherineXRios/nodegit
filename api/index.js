var http = require('http');
const random = require('random');

http.createServer(function (req, res) {
    console.log('texto cualquiera');    
    var numero = random.int(0, 100);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Prueba ahora con dockers Kim y Katt, Creo que por fin se logro' + numero);
    
}).listen(3000);

