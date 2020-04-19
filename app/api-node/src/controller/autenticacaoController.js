const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authConfig = require('../config/auth');

const Usuario = require('../models/usuario');
const router = express.Router();

router.post('/register', async (req, res) => {
    const { email } = req.body;

    try {
        if (await Usuario.findOne({email}))
            return res.status(400).send({
                error: 'Usuario já cadastrado!'
            });

        console.log(email);

        const usuario = await Usuario.create(req.body);
        usuario.senha = undefined;
        return res.send({ usuario });
    }   
    catch (err) {
        return res.status(400).send({
            error: 'Falha ao salvar registo.'
        }); 
    }
});

router.post('/authenticate', async (req, res) => {
    const { email, senha } = req.body;
    const usuario = await Usuario.findOne({ email }).select('+senha');

    if (!usuario)
        return res.status(400).send({
            error: 'Usuário não encontrado'
        });

    if (!await bcrypt.compare(senha, usuario.senha))
        return res.status(400).send({
            error: 'Senha inválida'
        })

    usuario.senha = undefined;

    const token = jwt.sign({ id = usuario.id }, authConfig.secret, {
        expiresIn: 86400,
    });


    res.send( { usuario, token } );
})

module.exports = app => app.use('/auth', router);