const cnct = require('/ON');

// FUNÇÃO PARA SELECIONAR TODOS OS PRODUTOS
const getAllTransactions = (req, res) => {
    // Executa uma consulta SQL para selecionar todos os produtos da tabela "products"
    cnct.query('select * from products', (err, results) => {
        if (err) {
            // Se ocorrer um erro na consulta, exibe uma mensagem de erro no console e retorna um status 500
            console.error('Erro ao obter produto', err);
            res.status(500).send('Erro ao obter produto');
            return;
        }
        // Se a consulta for bem-sucedida, retorna os resultados no formato JSON
        res.json(results);
    });
}
;module.exports = {
    getAllTransactions}