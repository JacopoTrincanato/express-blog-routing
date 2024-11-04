//creo una variabile che richiama express
const express = require('express')
const app = express()

//importo il contenuto di posts.js
const postRouter = require('./routers/posts.js')

//richiamo la variabile d'ambiente HOST dal file .env
const HOST = process.env.HOST

//richiamo la variabile d'ambiente PORT dal file .env
const PORT = process.env.PORT

//gestisco i file statici
app.use(express.static('/public'));

//starto il server
app.listen(PORT, (req, res)=>{
    console.log(`Server is running at ${HOST}:${PORT}`);
    
})

//inserisco il middleware
app.use(express.json())

//creo la prima rotta
app.get('/', (req, res)=>{
    res.send('Post rest API');
})

//Post API
app.use('/posts', postRouter);