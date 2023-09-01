function saludar(nombre) {
  return `Hola ${nombre}`;
}

function saludarHolaMundo() {
  return "Hola, Mundo";
}

// module.exports.saludar = saludar;
// module.exports.saludarHolaMundo = saludarHolaMundo;

// Otra forma de exportar varias funciones de forma equivalente.

module.exports = {
  saludar: saludar,
  saludarHolaMundo: saludarHolaMundo
};