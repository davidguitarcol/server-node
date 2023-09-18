const http = require('http');
const chalk = require('chalk');

// Define el host y el puerto
const host = 'localhost';
const port = 8000; 

// Crea un servidor HTTP
const server = http.createServer((req, res) => {
  // Configura la respuesta como JSON
  res.writeHead(200, {'Content-Type': 'application/json'});

  // Define los datos a enviar como respuesta
  const responseData = {
    nombre: 'David',
    mensaje: '¡Hola desde mi servidor Node.js!'
  };

  // Envía los datos como JSON
  res.end(JSON.stringify(responseData));
});

// Inicia el servidor en el puerto y el host especificados
server.listen(port, host, () => {
  console.log(chalk.green(`El servidor está escuchando en http://${host}:${port}`));
});