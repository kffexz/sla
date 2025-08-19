const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());


app.get('/nao-autorizado', (req,res) => {

    res.status(401).json({
        status:401,
        mensagem: 'você precisa estar logado para acessar esta página'
    });
});

app.get("/proibido", (req,res) => {

    res.status(403).send('403 Proibido - Você não tem permissão para acessar este recurso')
});

app.post("/somente-get", (req,res) => {

    res.status(501).send('501 não implementado - rota aceita apenas GET')

});

app.post("/usuario", (req,res) => {

    res.status(409).send('409 conflito - usuário  duplicado')

});

app.get("/limite", (req,res) => {

});





app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});