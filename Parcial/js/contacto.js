const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();
    
    const camposRequeridos = formulario.querySelectorAll("[required]");
    let todosLlenos = true;

    camposRequeridos.forEach(campo => {
        
        if (campo.value.trim() === "") {
            todosLlenos = false;
        }
    });

    if (!todosLlenos) {
        alert("Por favor, completa todos los campos.");
    } else {
        alert("Gracias por consulta");
        
    }
});
    