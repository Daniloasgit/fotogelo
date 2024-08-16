const dotenv = require ( 'dotenv');

dotenv.config();


const express = require('express');
const cors = require('cors');
const bodyParser = require ('body-parser');


const connect = require ('/ON');
const transacao = require('/definicao');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/transactions', transacao);

app.get('/', (req, res)=>{
  res.send('servidor está ativo e rodando com sucesso');
});

const port = process.env.port || 5000;