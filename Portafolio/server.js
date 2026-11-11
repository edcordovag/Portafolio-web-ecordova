const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public')); // Carpeta donde está tu index.html y tus archivos web

// Configuración de la conexión a XAMPP / MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_portafolio'
});

db.connect((err) => {
    if (err) {
        console.error("Error al conectar a la BD:", err);
        return;
    }
    console.log("¡Conexión exitosa a la base de datos MySQL!");
});

// API para que jQuery consulte los proyectos
app.get('/api/proyectos', (req, res) => {
    db.query('SELECT * FROM proyectos', (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(results);
        }
    });
});

app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});