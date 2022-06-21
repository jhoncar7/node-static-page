const res = require('express/lib/response');
const http = require('http');

http.createServer((req, res) => {
    res.write('Hola JhonCar')
    res.end()
 }).listen(8080);

 console.log('escuchando en el puerto 3000')