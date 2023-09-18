// const promesaCumplida = true;

// const { resolve } = require("path");
// const { setTimeout } = require("timers/promises");
// const { serialize } = require("v8");

// const miPromesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (promesaCumplida) {
//             resolve('¡Promesa cumplida!');
//         } else {
//             reject('Promesa rechazada...');
//         }
//     }, 3000);
// });

// const manejarPromesaCumplida = (valor) => {
//     console.log(valor);
// };

// const manejarPromesaRechazada = (razonRechazo) => {
//     console.log(razonRechazo);
// };

// miPromesa.then(manejarPromesaCumplida, manejarPromesaRechazada);

const estatusPedido = () => {
    return Math.random() < 0.8;
};

const miPedidoDePizza = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (estatusPedido()){
            resolve('Pedido exitoso! Su pizza esta en camino.');
        } else {
            reject('Ocurrio un error. Por favor intentelo de nuevamente.')
        }
    }, 3000);
});

// const manejarPedido = (mensajeDeConfirmacion) => {
//     console.log(mensajeDeConfirmacion);
// };

// const rechazarPedido = (mensajeDeError) => {
//     console.log(mensajeDeError);
// };

// miPedidoDePizza.then(manejarPedido, rechazarPedido);

miPedidoDePizza
// Chaining Promises
    .then((mensajeDeConfirmacion) => {
        console.log(mensajeDeConfirmacion);
    })
    .catch((mensajeDeError) => {
        console.log(mensajeDeError);
    });