const dotenv = require('dotenv');
dotenv.config();

const express = require ('express');
const app = express();
const cors= require ('cors');
const bodyParser = require ('body-parser');
const on = require('./config/sql.js');

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send ('servidor está ativo');
});

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})

