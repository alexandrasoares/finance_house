const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');
module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader) {
        return res.status(401).send({ 
            error: 'Não autenticado' 
        });
    }

    const parts = authHeader.split(' ');

    if (!parts.lenght ===2) {
        return res.status(401).send({
            error: 'Erro token'
        });
    }

    const [ scheme, token ] = parts;

    if (!/^Bearer$/i.test(scheme)) {
        return res.status(401).send({
            erro: 'Erro de formatação no token'
        });
    }

    jwt.verify(token, authConfig.secret,  (err, decoded) => {
        if (err) {
            return res.status(400).send({
                error: 'Token inválido'
            });
        }

        req.userId = decoded.id;
        return next();
    });
}