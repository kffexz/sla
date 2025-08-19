const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/sucesso', (req,res) => {
    res.status(200).send('Requisição concluída com sucesso (200)');
});

app.post('/criar', (req, res) => {
    res.status(201).send('Requisição criada com sucesso (201)');
});

app.get('/nao-encontrado' , (req,res)=>{
    res.status(404).send('pagina ou recurso não encontrado (404)')
});

app.get('/produto/:id', (req,res) => {

    const produtos = {1: 'notebook',
                      2: 'mouse',
                      3: 'teclado'};

    const id = req.params.id;
    if(produtos[id]){
        res.status(200).send(`Produto encontrado - ${produtos[id]}`)
    }else {
        res.status(404).send('Produto não encontrado')
    }
});

app.get('/nao-autorizado', (req,res) => {

    res.status(401).json({
        status:401,
        mensagem: 'você precisa estar logado para acessar este recurso'
    });
});


app.get('/nao-autorizado', (req,res) => {

    res.status(200).json({
        status:401,
        mensagem: 'você precisa estar logado para acessar este recurso'
    });
});


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});