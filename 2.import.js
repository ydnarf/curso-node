// Importar todos los elementos

// const saludos = require("./saludos.js");

// console.log(saludos.saludar("Maveli"));
// console.log(saludos.saludarHolaMundo());


// Importar elementos con la sintaxis de desestructuración y requiere.

const { saludar, saludarHolaMundo } = require("./1. exports.js");

console.log(saludar("Maveli"));
console.log(saludarHolaMundo());