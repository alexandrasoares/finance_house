const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const authConfig = require('../../config/auth');

const Usuario = require('../models/usuario');
const router = express.Router();

function gerarToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400, 
    });
}

router.post('/registro', async (req, res) => {
    const { email } = req.body;

    try {
        if (await Usuario.findOne({email}))
            return res.status(400).send({
                error: 'Usuario já cadastrado!'
            });

        console.log(email);

        const usuario = await Usuario.create(req.body);
        usuario.senha = undefined;
        return res.send({ 
            usuario,
            token: gerarToken({ id: URLSearchParams.id })
        });
    }   
    catch (err) {
        return res.status(400).send({
            error: 'Falha ao salvar registo.'
        }); 
    }
});

router.post('/autenticacao', async (req, res) => {
    const { email, senha} = req.body;
    const usuario = await Usuario.findOne({email}).select('+senha');

    if (!usuario) {
        return res.status('400').send({ error: 'Usuário não encontrado'});
    }

    if (!await bcrypt.compare(senha, usuario.senha)) {
        return res.status('400').send({ error: 'Senha invalida!'});
    }

    usuario.senha = undefined;

    res.send({ 
        usuario,
        token: gerarToken({ id: usuario.id })
    });
});

router.post('/esqueceu_senha', async (req, res) => {
    const { email } = req.body;

    try {
        const usuario = await Usuario.findOne( { email } );

        if (!usuario) {
            return res.status(400).send({ error: 'Usuário não encontrado' });
        }

        const token = crypto.randomBytes(20).toString('hex');
        const now = new Date();
        now.setHours(now.getHours() + 1);

        await Usuario.findByIdAndUpdate(usuario.id, {
            '$set': {
                resetSenhaToken: token,
                resetSenhaExpirada: now
            }
        });

        console.log(token, now);
    } catch (err) {
        res.status(400).send({
            error: 'Erro ao lembrar a senha, tente novamente!'
        });
    }
});
module.exports = app => app.use('/auth', router);