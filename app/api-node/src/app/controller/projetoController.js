// Para verificar se o token do usuário é válido
const express = require('express');
const authMiddleware = require('../middleware/auth-middleware');
const router = express.Router();

router.use(authMiddleware);
router.get('/', (req, res) => {
    res.send({ ok: true, usuario: req.usuarioId });
});

module.exports = app => app.use('/projeto', router);

