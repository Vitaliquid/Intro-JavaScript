console.log("\n********** Variables ***********\n")
var numero1 = 4;
var numero2 = 2;
console.log("Número 1: " + numero1 + " Número 2: " + numero2);

console.log("\n********** Cadenas ***********\n")
var frase1 = "Ejemplo comilas dobles";
var frase2 = 'Ejemplo comillas simples';
var frase3 = `Ejemplo comillas invertidas`;
var frase4 = "prueba lógica 4 es mayor que 2"
console.log(frase2 + "\n" + frase2 + "\n" + frase3);

console.log("\n********** Condicionales ***********\n")
console.log(numero1 > numero2);

console.log("\n********** Operadores Lógicos AND***********\n")
console.log(true && false);

console.log("\n********** Operadores Lógicos OR***********\n")
console.log(false || false);

console.log("\n********** Arreglos ***********\n")
let listaDeNumeros = [2, 3, 5, 7, 11, 234];
console.log(listaDeNumeros[5]);

listaDeNumeros.push(16);
listaDeNumeros.push(939);

console.log(listaDeNumeros);
console.log(listaDeNumeros.length);

let listaDePalabras = ["Explorer", "MissionCommander", "LaunchX", "Innovaccion"]
console.log(listaDePalabras);
console.log(listaDePalabras.length);

let palabra = "Explorer";
console.log(palabra[2]);
console.log(palabra.length);

console.log("\n********** Objetos ***********\n")
let explorer = { 
    nombre: "Ricardo Garrido",
    email: "ce14350@innovaccion.mx",
    numreg: 14350,
    mision: "FrontEnd",
    proyectos: ["Abogabot", "Taquería", "Pasteleria", "Vacunación", "Pokedex"],
    proPer: {
        escolar: "Tareas",
        profesional: "Trabajo",
        personal: "Negocio"
    }

};

console.log(explorer);
console.log(explorer.proPer);