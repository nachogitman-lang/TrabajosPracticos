import React, { useState } from "react";

function App() {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [mensaje, setMensaje] = useState("");


  const manejarSubmit = (e) => {
    e.preventDefault();

    const edadNum = parseInt(edad, 10);

    if (edadNum < 18) {
      setMensaje(`Hola ${nombre}, eres muy joven para usar esta aplicación`);
    } else {
      setMensaje(`Bienvenido ${nombre}, gracias por usar nuestra aplicación`);
    }
  };

  return (
    <div style={{ margin: "20px", fontFamily: "Arial" }}>
      <h1>Bienvenido al sitio web</h1>
      <p>Por favor, ingresa tu nombre y edad:</p>
      <form onSubmit={manejarSubmit}>
        <div>
          <label>Nombre: </label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Edad: </label>
          <input
            type="number"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {mensaje && <h2>{mensaje}</h2>}
    </div>
  );
}

export default App;