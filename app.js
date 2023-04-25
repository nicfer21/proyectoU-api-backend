import express from 'express';
import morgan from 'morgan'
import { PORT } from './src/config.js';

const app = express();

//Morgan para registrar solicitudes HTTP en el servidor
app.use(morgan('dev'));
//Lectura de archivos tipo JSON
app.use(express.json());


app.get('/', (req, res) => {
    res.json({
        "message": "Coneccion al servidor de Express"
    });
});

app.use((req, res) => {
    //Si no encuentra la ruta manda error 404
    res.status(404).json({
        "error": "404",
        "message": "Ruta inexistente"
    });
});

app.listen(PORT, () => {
    console.log(`Ejemplo listo en el puerto -> ${PORT}!`)
});
