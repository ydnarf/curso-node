let infoCurso = {
  "titulo": "Aprede Node.js",
  "numVistas": 45642,
  "numLikes":21123,
  "temas": [
    "JavaScript",
    "Node.js"
  ],
  "esPublico": true
}

// Objecto -> Cadena de caracteres
// Cadena de caracteres en formato JSON
let infoCursoJSON = JSON.stringify(infoCurso);

console.log(infoCursoJSON);
console.log(typeof infoCursoJSON)

// Cadena de caracteres -> Objecto
let infoCursoObjecto = JSON.parse(infoCursoJSON);

console.log(infoCursoObjecto);
console.log(typeof infoCursoObjecto);