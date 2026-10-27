const express = require('express');
const { Pass } = require('passkit-generator');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Página principal para evitar el error "Cannot GET /"
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Café Titán - Servidor de Pases</title>
            <style>
                body { font-family: sans-serif; background: #2c1d11; color: #fff; text-align: center; padding: 50px; }
                .card { background: #4e342e; padding: 20px; border-radius: 12px; display: inline-block; box-shadow: 0 4px 15px rgba(0,0,0,0.3); }
                a { color: #fff; text-decoration: none; font-weight: bold; background: #2e7d32; padding: 12px 24px; border-radius: 6px; display: inline-block; margin-top: 15px; }
            </style>
        </head>
        <body>
            <div class="card">
                <h1>☕ Café Titán</h1>
                <p>Servidor de Pases Digitales Activo</p>
                <a href="/descargar-pase/001">Probar Pase (Cliente 001)</a>
            </div>
        </body>
        </html>
    `);
});

app.get('/descargar-pase/:clienteId', async (req, res) => {
    try {
        const clienteId = req.params.clienteId;
        const CAFE_LAT = 5.0667;
        const CAFE_LON = -75.4833;

        console.log(`Generando pase para el cliente: ${clienteId}`);
        
        res.send(`
            <!DOCTYPE html>
            <html lang="es">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Pase Generado</title>
                <style>
                    body { font-family: sans-serif; background: #f4efe9; color: #3e2723; text-align: center; padding: 40px; }
                    .box { background: #fff; padding: 25px; border-radius: 12px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); display: inline-block; }
                </style>
            </head>
            <body>
                <div class="box">
                    <h2>✅ Tarjeta Activa para Cliente: ${clienteId}</h2>
                    <p>Ubicación GPS: <strong>Ecoparque Los Yarumos (${CAFE_LAT}, ${CAFE_LON})</strong></p>
                    <p>Notificación habilitada para pantalla de bloqueo al pasar cerca.</p>
                </div>
            </body>
            </html>
        `);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Error generando el pase');
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});
