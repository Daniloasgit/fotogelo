const dotenv = require ( 'dotenv')

dotenv.config();


const express = require('express');
const cors = require('cors')
const bodyParser = require ('body-parser')
 
const app = require ('express')();
app.use (cors());
app.use (bodyParser.json());
