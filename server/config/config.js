// PUERTO 
process.env.PORT = process.env.PORT || 3000;


//ENTORNO
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//Firma secreta de JWT 
process.env.FIRMA = process.env.FIRMA || 'firma-super-secreta';

//CONEXIÓN A BASE DE DATOS  
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/Starbucks';
} else {
    urlDB = ''
}

process.env.URLDB = urlDB;