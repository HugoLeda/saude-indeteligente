const express = require('express');
const mongoose = require('mongoose');

const server = express();

mongoose.connect('mongodb+srv://joao:TGSUS1@cluster0.nndy2tl.mongodb.net/')
  .then( () => {
    const port = 3000

    server.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*')
      res.setHeader('Access-Control-Allow-Methods', '*')
      res.setHeader('Access-Control-Allow-Headers', '*')
      next()
    })

    server.use(express.json())
    //server.use(router) #fazer import depois de configurar as rotas
    
    server.listen(port, () => {
      console.log(`🚀 Server is running on http://localhost:${port}`)
    })
  })  
  .catch( (erro) => console.log('erro ao conectar', erro));