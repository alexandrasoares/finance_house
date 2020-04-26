const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const mailer = require('../../modules/mailer');

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
        const usuario = await Usuario.findOne({ email });

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

        mailer.sendMail({
            to: email,
            from: 'al.soares@reply.com',
            template: 'auth/esqueceu_senha',
            context: { token },
        }, (err) => {
            if (err) {
                console.log('ERRO NÃO ESPERADO', err);
                return res.status(400).send({
                    error: 'Não foi possivel enviar a senha para o email.'
                });
            }

            return res.send();
        })
    } catch (err) {
        // console.log('ERRO NÃO ESPERADO', err);
        res.status(400).send({
            error: 'Erro interno ao tentar lembrar a senha, tente novamente!'
        });
    }
});

router.post('/resetar_senha', async (req, res) =>{

    const { email, token, senha } = req.body;
    try {
        const usuario = await Usuario.findOne({ email })
        .select('+resetSenhaToken resetSenhaExpirada');

        if (!usuario) {
            return res.status(400).send({
                error: 'Usuaário não encontrado'
            });
        }

        if (token !== usuario.resetSenhaToken) {
            return res.status(400).send({
                error: 'Token Inválido'
            });
        }
        
        const now = new Date();
        
        if (now > usuario.resetSenhaExpirada) {
            return res.status(400).send({
                error: 'Token expirado, gere um novo'
            });
        }

        usuario.senha = senha;

        await usuario.save();
        res.send();

    } catch (err) {
        console.log('ERRO NAO ESPERADO', err);
        res.status(400).send({
            error: 'Não foi possível resetar a senha, tente novamente!'
        });
    }
});
module.exports = app => app.use('/auth', router);