const fs = require('fs');

// >>> Leer archivo

console.log('Antes de leer el archivo...');

fs.readFileSync('7.Modulo-fs.html', 'utf-8', (err, contenido) => {
    if (err) {
        // console.log(err);
        throw err; // Alternativa, detiene la ejecucion y muestra el error.
    }
    console.log(contenido);
});

console.log('Despues de leer el archivo...');


// >>> Cambiar el nombre del archivo

// fs.renameSync('7.1.Modulo-fs.html', '7.Modulo-fs.html', (err) => {
//   if(err) {
//     throw err;
//   }
//   console.log('Nombre cambiado exitosamente');
// });

// console.log('Despues de cambiar el nombre del archivo...');


// >>> Agregar contenido al final de un archvo.

fs.appendFileSync('7.Modulo-fs.html', '<p>Hola</p>', (err) => {
  if(err) {
    throw err;
  }
  console.log('Archivo actualizado.')
});

console.log('Despues de agregar contenido al archivo...');


// >>> Reemplazar todo el contenido del archivo.

fs.writeFileSync('7.Modulo-fs.html', 'Contenido nuevo', (err) => {
  if (err){
    throw err;
  }
  console.log('Contenido reemplazado exitosamente.');
});

console.log('Despues de reemplazar el contenido del archivo...');


// >>> Eliminar archivos.

// fs.unlinkSync('archivo-para-eliminar.js', (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log('Archivo eliminado.');
// });

// console.log('Despues de eliminar el archivo...');