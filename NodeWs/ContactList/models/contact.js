const mongooes = require('mongoose');

const contactScheme = new mongooes.Schema({
    name:{
        type: String,
        required : true
    },
    phoneNumber :{
        type: String,
        required : true
    }
});

const Contact = mongooes.model('Contact', contactScheme);

module.exports = Contact;
