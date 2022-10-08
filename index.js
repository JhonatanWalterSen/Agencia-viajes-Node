import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';
const app = express()
const port = process.env.PORT || 4000

// habilitar PUG
app.set('view engine','pug')

//conectar la bd
db.authenticate()
    .then(() => console.log('Bd conectada'))
    .catch(error => console.log(error))

// año actual
app.use((req,res,next)=>{
    const year = new Date()
    res.locals.ActualYear = year.getFullYear()
    res.locals.nombreSitio = "Agencia de viajes"
    next()
})

//def carpeta publica 
app.use(express.static('public'))

app.use('/',router)

app.listen(port,()=>{
    console.log(`El servidor está funcionando en el puerto ${port}`);
})