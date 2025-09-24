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