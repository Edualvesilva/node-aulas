import express from 'express';

// Armazenando o express em uma variável. Ao invés de chamar express().get, usaremos app.get;
const app = express();

// Configurar a view engine com EJS
app.set('view engine','ejs')

// configurar as rotas de acesso

// Raiz
    app.get('/',(req,res) => {
       // res.send('Bem Vindo ao Servidor ExpressJS. Foi mais fácil do que parecia..')
       const bandas = ['Justin Bieber','Ozzy','titãs',"Calypso"]
       res.render('paginas/index',{bandas});
    });

// Configurando rota para Sobre
    app.get('/sobre',(req,res) => {
        res.render('paginas/sobre')
    });

// Configurando rota para contato
    app.get('/contato',(req,res) => {
        res.render('paginas/contato')
    });



// Iniciar o servidor e escolher a porta
app.listen(3000,() => {
        console.log('Servidor expressJS rodando normalmente')
})



