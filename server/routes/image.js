const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.get('/imagen/:ruta/:nombre', (req, res) => {
    let ruta = req.params.ruta;
    let nombreImagen = req.params.nombre;
    let rutaImagen = path.resolve(__dirname, `../../uploads/${ruta}/${nombreImagen}`);
    let noimage = path.resolve(__dirname, `../assets/no-imagen.jpg`);

    if (fs.existsSync(rutaImagen)) {
        return res.sendFile(rutaImagen);
    } else {
        return res.sendFile(noimage);
    }
});

module.exports = app;