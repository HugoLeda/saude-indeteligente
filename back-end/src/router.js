
const express = require('express');
const app = express();
const port = 3000;


app.get('/test', (req, res) => {
  res.send('Rota de teste funcionando!');
});

app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});
