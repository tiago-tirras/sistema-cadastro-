const express = require('express');
const conexao = require('./database');
const path = require('path');

const app = express();
const porta = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));


app.post('/ALUNOS',(req,res)=>{
    const {nome,email,curso} =req.body;

    const sql = 'insert into ALUNOS (nome,email,curso) values(?,?,?)';
    conexao.query(sql,[nome,email,curso],(erro,resultado)=>{
        if(erro){
            console.error('erro ao cadastrar aluno:',erro.message);
            return res.status(500).send('erro ao cadastrar aluno')
        }
        res.status(201).json({
            mensagem: 'aluno cadastrado com sucesso',
            id: resultado.insertId
        });
    });

});

app.get('/ALUNOS',(req,res)=>{
    const sql = 'select *from ALUNOS';

    conexao.query(sql,(erro,resultado)=>{
        if(erro){
            console.error('erro ao consultar alunos',erro.message);
            return res.status(500).send('erro ao consultar alunos.')
        }
        res.json(resultado);
    })
})
app.get('/ALUNOS/:id',(req,res)=>{
const id = req.params.id ;

const sql = 'select * from ALUNOS where id=?';

conexao.query(sql,[id],(erro,resultado)=>{
    if(erro){
        console.error('erro ao consultar aluno',erro.message);
        return res.status(500).send('erro ao consultar aluno')
    }

    if(resultado.length===0){
        return res.status(404).json({
            mensagem :'aluno nao encontrado'
        });
    }

    res.json(resultado[0]);
})
})

app.put('/ALUNOS/:id',(req,res)=>{
    const id = req.params.id;
    const {curso} = req.body;

    const sql = 'update ALUNOS set curso =? where id =?';

    conexao.query(sql,[curso,id],(erro,resultado)=>{
        if(erro){
            console.error('erro ao atualizar aluno',erro.message);
            return res.status(404).send('erro ao atualizar aluno')
        }

        if(resultado.affectedRows===0){
            return res.status(404).json({
                mensagem: 'aluno nao encontrado'
            })
        }
        res.json({
            mensagem: 'aluno atualizado com sucesso'
        });
    });
});

app.delete('/ALUNOS/:id', (req, res) => {
    const id = req.params.id;

    const sql = 'DELETE FROM ALUNOS WHERE id = ?';

    conexao.query(sql, [id], (erro, resultado) => {
        if (erro) {
            console.error('Erro ao excluir aluno:', erro.message);
            return res.status(500).send('Erro ao excluir aluno.');
        }

        if (resultado.affectedRows === 0) {
            return res.status(404).json({
                mensagem: 'Aluno não encontrado.'
            });
        }

        res.json({
            mensagem: 'Aluno excluído com sucesso!'
        });
    });
});

app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});