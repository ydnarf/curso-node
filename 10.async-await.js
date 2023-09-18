function ordenarProducto(producto) {
  return new Promise((resolve, reject) => {
    console.log(`Ordenado: ${producto} de freeCodeCamp.`);
    setTimeout(() => {
      if (producto === 'taza') {
        resolve('Ordenando una taza con el logo de freeCodeCamp...');
      } else {
        reject('Este producto no esta disponible actualmente.');
      }
    }, 2000);
  });
}

function procesarPedido(respuesta) {
  return new Promise((resolve, reject) => {
    console.log('Procesando respuesta...');
    console.log(`La respuesta fue: "${respuesta}"`);
    setTimeout(() => {
      resolve('Gracias por tu compra. Disfruta tu pedido de freeCodeCamp.');
    }, 4000);
  });
}

// ordenarProducto('lapiz')
// // Chaining Promises
//   .then(respuesta => {
//     console.log('Repuesta recibida');
//     console.log(respuesta);
//     return procesarPedido(respuesta);
//   })
//   .then(respuesProcesada => {
//     console.log(respuesProcesada);
//   })
//   .catch(error => {
//     console.log(error);
//   });

async function realizarPedido(producto) {
  try {
    const respuesta = await ordenarProducto(producto);
    console.log('Respuesta recibida');
    const respuestaProcesada = await procesarPedido(respuesta);
    console.log(respuestaProcesada);
  } catch (error) {
    console.log(error);
  }
}

realizarPedido('taza');