/*********************************************************************************************************************************************************
 * Objetivo: Arquivo de ciação das funções para a api whatsapp
 * Data: 24/09/2025
 * Autor: Pedro Henrique
 * Versão: 1.0
 *********************************************************************************************************************************************************/

const dados = require('./contatos.js')
const MESSAGE_ERRO = {status: false, status_code: 404, development: 'Pedro Henrique Araújo'}

const getAllUsers = function(){
    let message = {status: true, status_code: 200, development: 'Pedro Henrique Araújo', usuarios: []}
    dados.contatos['whats-users'].forEach(function (item){
        message.usuarios.push(item)
    })

    return message
}

const getUserByNumber = function(number){
    let message = {status: true, status_code: 200, development: 'Pedro Henrique Araújo', usuario: []}

    dados.contatos['whats-users'].forEach(function(item){
        if(item.number == number){
            let json = {}
            json.account = item.account
            json.nickname = item.nickname
            json.foto = item['profile-image']
            json.number = item.number
            json.background = item.background
            json.create = item['created-since'].start
            json.end = item['created-since'].end
            message.usuario.push(json)
        }
    })

    return message
}

const getContactUserByNumber = function(number){
    let message = {status: true, status_code: 200, development: 'Pedro Henrique Araújo', contatos: []}

    dados.contatos['whats-users'].forEach(function(item){
        if(item.number == number){
            let json = {}
            json.nome = item.contacts.name

            message.contatos.push(json)
        }
    })

    return message
}

const getMessagesUserByNumber = function(number){

}

const getMessageContactByNumber = function(number){

}

console.log(getContactUserByNumber('11987876567'))
