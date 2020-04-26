const mongoose = require('../../banco');
const bcrypt = require('bcryptjs');
const UsuarioSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true
    },

    endereco: {
        type: String,
        required: true
    },

    email: {
        type: String,
        require: true,
        unique: true,
        required: true,
        lowercase: true
    },

    senha: {
        type: String,
        required: true,
        select: false
    }, 

    resetSenhaToken: {
        type: String,
        select: false
    },

    resetSenhaExpirada: {
        type: Date,
        select: false
    },

    confirmacaoSenha: {
        type: String,
        required: true,
        select: false
    },

    celular: {
        type: String,
        require: true,
    },

    dataCadastro: {
        type: Date,
        default: Date.now,
    }
});

UsuarioSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.senha, 10);
    this.senha = hash;

    next();
});

const Usuario = mongoose.model('Usuario', UsuarioSchema);

module.exports = Usuario;