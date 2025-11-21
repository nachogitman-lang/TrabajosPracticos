
//Ejercicio 1

let cantidadDeGatos = 5;

const emojis = ['😺', '😸', '😹'];

for (let i = 1; i <= cantidadDeGatos; i++) {
    console.log(`Gato #${i}: ${emojis[(i - 1) % emojis.length]}`);
}

//Ejercicio 2

let cantidadDePasos = 8;
const gatoEmoji = '🐈';
const pasoEmoji = '🐾';


for (let i = 1; i <= cantidadDeGatos; i++) {
    console.log(`Gato #${i}: ${gatoEmoji} ${pasoEmoji.repeat(cantidadDePasos)}`);
}

//Ejercicio 3

const gatos =  ['🐈', '🐈‍⬛'];

for (let i = 1; i <= cantidadDeGatos; i++) {
    console.log(`Gato #${i}: ${gatos[(i - 1) % gatos.length]} ${pasoEmoji.repeat(cantidadDePasos)}`);
    }