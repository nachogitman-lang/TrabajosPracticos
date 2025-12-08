let PriNom = document.getElementById("PriNom");
let SegNom = document.getElementById("PriSegNom");
let PriApe = document.getElementById("PriApe");
let SegApe = document.getElementById("PriSegApe");

let titulo = document.getElementById("titulo");
console.log(titulo.textContent);


let SegIntNom = document.getElementById("SegIntNom");
let SegIntSegNom = document.getElementById("SegIntSegNom") ;
let SegIntApe = document.getElementById("SegIntApe");
let SegIntSegApe = document.getElementById("SegIntSegApe");



let primerNombre = prompt("Ingrese el primer nombre del primer integrante:");
let segundoNombre = prompt("Ingrese el segundo nombre del primer integrante:");
let primerApellido = prompt("Ingrese el primer apellido del primer integrante:");
let segundoApellido = prompt("Ingrese el segundo apellido del primer integrante:");



PriNom.innerText = primerNombre;
SegNom.innerText = segundoNombre;
PriApe.innerText = primerApellido;
SegApe.innerText = segundoApellido;



let primerNombre2 = prompt("Ingrese el primer nombre del segundo integrante:");
let segundoNombre2 = prompt("Ingrese el segundo nombre del segundo integrante:");
let primerApellido2 = prompt("Ingrese el primer apellido del segundo integrante:");
let segundoApellido2 = prompt("Ingrese el segundo apellido del segundo integrante:");




SegIntNom.innerText = primerNombre2;
SegIntSegNom.innerText = segundoNombre2;
SegIntApe.innerText = primerApellido2;
SegIntSegApe.innerText = segundoApellido2;

let primerIntegrante = primerNombre + " " + segundoNombre + " " + primerApellido + " " + segundoApellido;
let segundoIntegrante = primerNombre2 + " " + segundoNombre2 + " " + primerApellido2 + " " + segundoApellido2;




console.log("-----");
console.log("Integrate 1: " + primerIntegrante);
console.log("Integrate 2: " + segundoIntegrante);
console.log("-----");




function marcarRepetido(datorep) {
    if (!datorep || datorep.classList.contains('repetido')) return;
    const colorRep = prompt("Ingrese un color para marcar el dato repetido en ingles:", 'red') || 'red';
    datorep.classList.add('repetido');
    datorep.style.color = colorRep;
}



function coincidencias() {
    let encontrado = false;

    if (primerNombre === primerNombre2) {
        marcarRepetido(PriNom);
        marcarRepetido(SegIntNom);
        encontrado = true;
    }
    if (segundoNombre === segundoNombre2) {
        marcarRepetido(SegNom);
        marcarRepetido(SegIntSegNom);
        encontrado = true;
    }
    if (primerApellido === primerApellido2) {
        marcarRepetido(PriApe);
        marcarRepetido(SegIntApe);
        encontrado = true;
    }
    if (segundoApellido === segundoApellido2) {
        marcarRepetido(SegApe);
        marcarRepetido(SegIntSegApe);
        encontrado = true;
    }

    if (encontrado) {
        console.log('se encontraron coincidencias en los datos de los integrantes');
    } else {
        console.log('no hay coincidencias en los datos ingresados');
    }
}

coincidencias();