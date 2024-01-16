const cors_proxy = require('cors-anywhere');

const host = '127.0.0.1';
const port = 8080;

cors_proxy.createServer({
    originWhitelist: [],  // Permitir todas las solicitudes
    requireHeaders: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function () {
    console.log('Servidor proxy CORS en ejecución en http://' + host + ':' + port);
});

// const express = require("express");

// const app = express();

// app.get("/quotes", (req, res) => {
//     // Agregar el encabezado CORS
//     res.setHeader("Access-Control-Allow-Origin", "*");

//     // Devolver las citas
//     res.json(quotes);
// });

// app.listen(port, () => {
//     console.log('Servidor proxy CORS en ejecución en http://' + host + ':' + port);
// })