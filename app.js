import express from 'express';
import morgan from 'morgan'
import { PORT } from './src/config.js';
import jwt from 'jsonwebtoken'
import First from './routes/First.Routes.js';

const app = express();


//Morgan para registrar solicitudes HTTP en el servidor
app.use(morgan('dev'));
//Lectura de archivos tipo JSON
app.use(express.json());


// RUta de inicio
app.get('/', (req, res) => {
    res.json({
        "message": "Coneccion al servidor de Express"
    });
});

//Login
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === 'usuario' && password === '1234') {
        const token = generarToken(123);
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Credenciales inválidas' });
    }
});

//Middleware de autenticacion
app.use((req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[0];
        jwt.verify(token, 'miClave', (err, decoded) => {
            if (err) {
                return res.status(403).json({ message: 'Token inválido' });
            }
            req.userId = decoded.userId;
            next();
        });
    } else {
        res.status(401).json({ message: 'Se requiere un token de autorización' });
    }
})

app.use('/first', First);

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

// genera el token
const generarToken = (userId) => {
    const payload = { userId };
    const secret = 'miClave';
    const options = { expiresIn: '5m' }; // '30m' '1h' '24h' 
    return jwt.sign(payload, secret, options);
}