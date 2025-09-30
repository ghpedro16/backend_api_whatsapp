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
            item.contacts.forEach(function(contatos){
                let json = {}
                json.nome = contatos.name
                json.imagem = contatos.image
                json.descricao = contatos.description

                message.contatos.push(json)
            })
        }
    })

    return message
}

const getMessagesUserByNumber = function(number){
    let message = {status: true, status_code: 200, development: 'Pedro Henrique Araújo', mensagens: []}

    dados.contatos['whats-users'].forEach(function(item){
        if(item.number == number){
            let json = {}
            json.contatos = item.contacts

            message.mensagens.push(json)
        }
    })

    return message
}

const getMessageContactByNumber = function(number, contactNumber){
    let message = {status: true, status_code: 200, development: 'Pedro Henrique Araújo', contato: []}

    dados.contatos['whats-users'].forEach(function(item){
        if(item.number == number){
            item.contacts.forEach(function (contatos){
                if(contatos.number == contactNumber){
                    let json = {}
                    json.nome = contatos.name
                    json.numero = contatos.number
                    json.mensagens = contatos.messages

                    message.contato.push(json)
                }
               
            })
        }
    })

    return message
}

const getMessageByKeyword = function(number, contactNumber, keyword){
    let message = {status: true, status_code: 200, development: 'Pedro Henrique Araújo', contato: []}

    dados.contatos['whats-users'].forEach(function(item){
        if(item.number == number){
            item.contacts.forEach(function(contato){
                if(contato.number == contactNumber){
                    contato.messages.forEach(function(mensagem){
                        if(mensagem.content.includes(keyword)){
                            
                            message.contato.push(mensagem.content)
                        }
                    })
                }
            })
        }
    })

    
    return message
    
    
}


console.log(getMessageByKeyword('11987876567', '26999999967', 'amor'))

module.exports = {
    getAllUsers,
    getUserByNumber,
    getMessagesUserByNumber,
    getMessageContactByNumber,
    getContactUserByNumber,
    getMessageByKeyword
}
