




document.addEventListener("DOMContentLoaded", () => {
    console.log("Contenido del DOM cargado");

    const textareauno = document.getElementById("origen");
    const divDestino = document.getElementById("destino");

    textareauno.value = "<p>Este contenido <strong>está listo</strong><br>para ser editado y pasarlo abajo.</p>";

    textareauno.addEventListener("input", () => {
        const inputs = document.getElementsByTagName("input");
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].disabled = false;
        }

    });

    const btnReemplazar = document.getElementById("btn-reemplazar");

    const botonesAgregar = document.getElementsByClassName("btn-agregar");

    btnReemplazar.addEventListener("click", () => {
        divDestino.innerHTML = textareauno.value;
    });

    botonesAgregar[0].addEventListener("click", () => {
        divDestino.innerHTML += textareauno.value;
    });

    botonesAgregar[1].addEventListener("click", () => {
        for (let i = 0; i < 5; i++) {
            divDestino.innerHTML += textareauno.value;
        }
    });
    botonesAgregar[2].addEventListener("click", () => {
        for (let i = 0; i < 10; i++) {
            divDestino.innerHTML += textareauno.value;
        }
    });

    botonesAgregar[3].addEventListener("click", () => {
        let n = parseInt(prompt("¿Cuántas veces quieres agregar el contenido?"));
        if (!isNaN(n)) {
            for (let i = 0; i < n; i++) {
                divDestino.innerHTML += textareauno.value;
            }
        }
    });

    const btnVaciar = document.querySelector(".btn-vaciar");
    const btnMayus = document.querySelector(".btn-convertir-a-mayusculas");
    const btnMinus = document.querySelector("button");

    btnVaciar.addEventListener("click", () => {
        divDestino.innerHTML = "";
    });

    btnMayus.addEventListener("click", () => {
        divDestino.innerHTML = divDestino.innerHTML.toUpperCase();
    });

    btnMinus.addEventListener("click", () => {
        divDestino.innerHTML = divDestino.innerHTML.toLowerCase();
    });
    
    const listaItems = document.getElementsByTagName("li");
    for (let i = 0; i < listaItems.length; i++) {
        listaItems[i].innerHTML = "[Ok] " + listaItems[i].innerHTML;
    }
});