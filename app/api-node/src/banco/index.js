const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nodebanco', {useNewUrlParser: true}).then(() => {
    console.log("Banco de dados conectado com sucesso");
}).catch((err) => {
    console.log("Falha ao tentar conectar com o banco de dados", err);
});
mongoose.Promise = global.Promise;

module.exports = mongoose;