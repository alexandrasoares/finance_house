const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

require('./app/controller/autenticacaoController')(app);
require('./app/controller/projetoController')(app);

//porta da API
app.listen('3000');