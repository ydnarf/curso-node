function mostrarTema(tema) {
    console.log(`Estoy aprendiendo ${tema}`);
}

// >>> setTimeout

// setTimeout(mostrarTema, 5000, 'Node.js');

// function sumar(a, b) {
//     console.log(a + b);
// }

// setTimeout(sumar, 5000, 5, 6);


// >>> setImmediate
/*
console.log('Antes de setImmediate()');

setImmediate(mostrarTema, 'Node.js');

console.log('Despues de setImmediate()');
*/

// >>> setInterval

setInterval(mostrarTema, 1500, 'Node.js');