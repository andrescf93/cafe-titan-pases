const express = require('express');
const { Pass } = require('passkit-generator');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/descargar-pase/:clienteId', async (req, res) => {
    try {
        const clienteId = req.params.clienteId;

        // Configuración de coordenadas de Manizales (Ecoparque Yarumos)
        const CAFE_LAT = 5.0667;
        const CAFE_LON = -75.4833;

        console.log(`Generando pase para el cliente: ${clienteId}`);
        
        // Respuesta simulada o buffer del pase
        res.send(`Pase generado correctamente para el cliente ${clienteId} con GPS en (${CAFE_LAT}, ${CAFE_LON})`);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Error generando el pase');
    }
});

app.listen(PORT, () => {
    console.log(`Servidor de Café Titán corriendo en http://localhost:${PORT}`);
});