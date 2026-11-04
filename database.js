const mysql = require ('mysql2');

const conexao = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'tiago',
    password: '4636463695',
    database: 'sistema_cadastro'

})

conexao.connect((erro)=>{
    if(erro){
        console.error('erro ao conectar ao banco de dados:',erro.message);
        return;
    }
    console.log('conectado ao MySQL com sucesso!')
})

module.exports = conexao;