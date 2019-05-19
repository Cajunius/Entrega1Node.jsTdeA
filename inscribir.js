//Require interno del modulo 'FileSystem'
const fs = require('fs');

let crearArchivo = (curso, nombreestudiante, cedula) => {
  //Función flecha (=>) que crea un archivo con el texto indicado.
  let {
    nombre,
    id,
    duracion,
    costo
  } = curso;
  texto = '           Comprobante de inscripción:' + '\n' + '\n' +
    '           Información del Curso:' + '\n' + '\n' +
    'Nombre: ' + nombre + ':\n' +
    'Duración: ' + duracion + '\n' +
    'Costo: ' + costo + '\n' +
    '\n' +
    '           Información del Estudiante:' + '\n' + '\n' +
    'Nombre: ' + nombreestudiante + '.\n' +
    'Cédula: ' + cedula + '.\n' +
    'N° de Pago: ~No aplicable~.';
  fs.writeFile('Comprobante de inscripción.txt', texto, (err) => {
    if (err) throw (err); //Si hay un error _arroja_ un mensaje de error
    setTimeout(() => console.log("Se ha creado su comprobante de inscripción exitosamente.\nGracias por preferirnos c; .".green), 1500);
    //Sino, indica que se creo el archivo exitosamente.
  });
}

let inscribir = (curso, nombre, cedula) => {
  crearArchivo(curso, nombre, cedula);
}

module.exports = {
  inscribir
}