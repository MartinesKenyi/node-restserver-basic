const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {

    const { q, name='no name', limit= 1 } = req.query

    res.json({
        msg: 'get api',
        q,
        name,
        limit
    })
}

const usuariosPost = (req, res) => {
    const { nombre, edad } = req.body;
    
    res.json({
        msg: 'post api',
        nombre, 
        edad
    })
}

const usuariosPut = (req, res) => {

    const id = req.params.id

    res.json({
        msg: 'put api',
        id
    })
}

const usuariosDelete = (req, res) => {
    res.json({
        msg: 'delete api'
    })
}
const usuariosPatch = (req, res) => {
    res.json({
        msg: 'patch api'
    })
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
}