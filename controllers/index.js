const { roteador } = require('./comentariosController')
const { usuarios } = require('./usuariosController')


const controllers = {
    roteador, 
    usuarios
}

module.exports = controllers