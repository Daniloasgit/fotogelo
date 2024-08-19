
const dotenv = require('dotenv');
dotenv.config(); 


const express = require('express');

const cors = require('cors');

const bodyParser = require('body-parser');


const ON= require('/ON');


const app = express();


app.use(cors()); 
app.use(bodyParser.json()); 



app.get('/', (req, res) => {
    res.send('Servidor ativo com sucesso'); 
});

const PORT = process.env.PORT || 3000; 
