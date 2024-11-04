//creo una variabile che richiama express
const express = require('express')
const app = express()

//richiamo la variabile d'ambiente HOST dal file .env
const HOST = process.env.HOST

//richiamo la variabile d'ambiente PORT dal file .env
const PORT = process.env.PORT

//starto il server
app.listen(PORT, (req, res)=>{
    console.log(`Server is running at ${HOST}:${PORT}`);
    
})

//creo la prima rotta
app.get('/', (req, res)=>{
    res.send('Post rest API')
})