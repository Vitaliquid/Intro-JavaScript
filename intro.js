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

/* Flujo Condicional */
console.log("\n********** Flujo Condicional ***********\n")
let number1 = 4;
let number2 = 2;
console.log("\n********** if / else ***********\n")
if (number1 > number2) {
    console.log("El número 1 es mayor que el número 2")
}
else if( number1 == number2)
    console.log("Los números son iguales")
else {
    console.log("El número 2 es mayor que número 1")
}

/* Ciclo condicional */
console.log("\n**************** while ***************\n");
let numberWhile = 0;
while (numberWhile <= 12) {
console.log(numberWhile);
numberWhile = numberWhile + 2;
}
console.log("Aqui ya salió del while " + numberWhile)

/* Ciclo condicional de una iteración minimo */
console.log("\n**************** Do while ***************\n");
let numeroDoWhile = 24;
do {
    numeroDoWhile = numeroDoWhile + 2;
    console.log(numeroDoWhile);
} while (numeroDoWhile < 20);
console.log("Aquí sale del Do While " + numeroDoWhile);


/* Ciclo for con iteración controlada */
console.log("\n**************** For ***************\n");
let numeroFor = 10
for (let numeroFor = 0; numeroFor <= 12; numeroFor = numeroFor +1) {
}
console.log("Aquí salimos del for " + numeroFor);

/* Opciones para evitar anidar condicionales */
console.log("\n**************** Switch ***************\n");
switch (prompt("¿Cómo está el clima?")) {
    case "lluvioso":
        console.log("No te vayas a mojar");
        break;
    case "soleado":
        console.log("Ponte bloqueador");
        break;
    case "nublado":
        console.log("Tapate bien");
        break;
    default:
        console.log("no se como está el clima");
        break;
}
console.log("Aquí salimos del Switch");
