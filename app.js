/*********************************************************************************************************************************************************
 * Objetivo: Criar os EndPoints referentes a api whatsapp
 * Data: 24/09/2025
 * Autor: Pedro Henrique
 * Versão: 1.0
 *********************************************************************************************************************************************************/

//Import das dependencias da API
const express = require('express') //Responsavel pela API

//Import do arquivo de funções
const dados = require('./modulo/funcoes.js')

//Retorna a porta do servidor atual ou colocamos uma porta local 
const PORT = process.PORT || 8000

//Criando uma instancia de uma classe do express 
const app = express()

//Configuração de permissoes
app.use((request, response, next) => {
    response.header('Acess-Control-Allow-Origin', '*') //Servidor de origem da API
    response.header('Acess-Control-Allow-Methods', 'GET') //Verbos permitidos
    //Carrega as configurações do CORS da API
    app.use(cors())
    next() //Proximo, carregar os proximos endpoints
})

//EndPoint que retorna todos os usuarios
app.get('/v1/users', function(request, response){
    //Pesquisa na função os estados
    let usuarios = dados.getAllUsers()
    //Retorna o status code e o JSON
    response.status(usuarios.status_code).json(usuarios)
})

//EndPoint que retorna usuario pelo numero
app.get('/v1/user/:numero', function(request, response){
    //Variavel que recebe o parametro da url
    let user = request.params.numero

    //Pesquisa na função os usuarios
    let usuarios = dados.getUserByNumber(user)
    //Retorna o status code e o JSON
    response.status(usuarios.status_code).json(usuarios)
})

//EndPoint que retorna informacoes sobre os contatos do usuario
app.get('/v1/user/contatos/:numero', function(request, response){
    //Variavel que recebe o parametro da url
    let user = request.params.numero

    //Pesquisa na função os usuarios
    let contato = dados.getContactUserByNumber(user)
    //Retorna o status code e o JSON
    response.status(contato.status_code).json(contato)
})

//EndPoint que retorna as mensagens existentes do usuario com todos os contatos
app.get('/v1/user/messages/:numero', function(request, response){
    //Variavel que recebe o parametro da url
    let user = request.params.numero

    //Pesquisa na função os usuarios
    let mensagens = dados.getContactUserByNumber(user)
    //Retorna o status code e o JSON
    response.status(mensagens.status_code).json(mensagens)
})