const express = require ('express');

const rotas = express.Router();

const controlador  = require ('./controlador/controllers');

rotas.get('/',controlador.getAllTransactions);

rotas.post('/', controlador.postTransactions);

rotas.put('/:id', controlador.putTransactions);

rotas.patch('/:id',controlador.patchTransacions);

rotas.delete('/:id',controlador.deleteTransactions);

module.exports = rotas