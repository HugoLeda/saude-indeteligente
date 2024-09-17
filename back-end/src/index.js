const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

require('./config/dbConfig');

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3000);