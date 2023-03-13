const mongooes = require('mongoose');

mongooes.connect('mongodb://127.0.0.1/contactList_db');

const db = mongooes.connection;
db.on('error', console.error.bind(console, 'error connecting to db'));

db.once('open' , function(){
    console.log("Sucessfully connected to db");
});
