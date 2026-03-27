const express = require('express');

const path = require('path');

const app = express();

const PORT = 3000;


app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));
});




app.use((req, res) => {
    res.status(404).json({ 
        error: 404, 
        message: "Ruta no encontrada" 
    });
});

app.get('/foa', (req, res) => {
    throw new Error("Fallo interno simulado"); 
});

app.use((err, req, res, next) => {
    console.error(err.stack); 
    res.status(500).json({ 
        error: 500, 
        message: "Error interno en el servidor" 
    });
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});