const http = require('http')

const servidor = http.createServer((req, res) => {

    // >>> Ejemplo de Solicitud(request)
    // console.log('===> req (solicitud)');
    // console.log(req.url);
    // console.log(req.method);
    // console.log(req.headers);

    //>>> Ejemplo de Repuesta(response)
    console.log('===>res (respuesta)');
    // console.log(res.statusCode); // 200 OK
    // res.statusCode = 404;
    // console.log(res.statusCode); // 404 Not Found

    // Configurar el cabecera
    res.setHeader('content-type', 'application/json');
    console.log(res.getHeaders());

    res.end('Hola, Mundo');
});

const puerto = 3000;

servidor.listen(puerto, () => {
    console.log(`El servidor esta escuchando en el puerto ${puerto}`);
});