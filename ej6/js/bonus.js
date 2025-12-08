let titulo = document.getElementById("titleB");
console.log(titulo.textContent);

let formulario = document.getElementById("PrimerInte");

let Dat1 =  document.getElementById("Dat1");
let Dat2 =  document.getElementById("Dat2");
let Dat3 =  document.getElementById("Dat3");
let Dat4 =  document.getElementById("Dat4");    

let Dat5 =  document.getElementById("Dat5");
let Dat6 =  document.getElementById("Dat6");
let Dat7 =  document.getElementById("Dat7");
let Dat8 =  document.getElementById("Dat8");

formulario.addEventListener("submit" , function (event) {
    event.preventDefault();
    let PriNom = document.getElementById("PriNom");
    let PriSegNom = document.getElementById("PriSegNom") ;
    let PriApe = document.getElementById("PriApe");
    let PriSegApe = document.getElementById("PriSegApe");
    
    let PrimInegrante = PriNom.value + " " + PriSegNom.value + " " + PriApe.value + " " + PriSegApe.value;

    console.log("----");
    console.log("integrante 1: " + PrimInegrante);
}
);

let SegundoInte = document.getElementById("SegundoInte");

SegundoInte.addEventListener("submit" , function (event) {
    event.preventDefault();
    let SegIntNom = document.getElementById("SegIntNom");
    let SegIntSegNom = document.getElementById("SegIntSegNom") ;
    let SegIntApe = document.getElementById("SegIntApe");
    let SegIntSegApe = document.getElementById("SegIntSegApe");

    let SegunIntegrante = SegIntNom.value + " " + SegIntSegNom.value + " " + SegIntApe.value + " " + SegIntSegApe.value;

    console.log("integrante 2: " + SegunIntegrante);
    
    console.log("----");
    
    
    function marcarRepetido(datorep) {
        if (!datorep || datorep.classList.contains('repetido')) return;
        const colorRep = prompt("Ingrese un color para marcar el dato repetido (ej: red o #f00):", 'red') || 'red';
        datorep.classList.add('repetido');
        datorep.style.color = colorRep;
    }
    
    let rep = false;
    if (PriNom.value === SegIntNom.value) {
        marcarRepetido(Dat1);
        marcarRepetido(Dat5);
        rep = true;
    }
    if (PriSegNom.value === SegIntSegNom.value) {
        marcarRepetido(Dat2);
        marcarRepetido(Dat6);
        rep = true;
    }
    if (PriApe.value === SegIntApe.value) {
        marcarRepetido(Dat3);
        marcarRepetido(Dat7);
        rep = true;
    }
    if (PriSegApe.value === SegIntSegApe.value) {
        marcarRepetido(Dat4);
        marcarRepetido(Dat8);
        rep = true;
    }
    if (!rep) {
        console.log("No hay datos repetidos entre los integrantes");
        
    }
    else {
        console.log("Hay datos repetidos entre los integrantes");
    }
}

);




