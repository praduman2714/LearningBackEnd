const express = require('express');
const path = require('path');
const db = require('./config/mongoos');

const Contact = require('./models/contact');

const port = 8000;

const app = express();

// We are now telling the express js to use ejs to use as view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));



var contactList = [
    {
        name : "Praduman ",
        phoneNumber: "90601"
    },
    {
        name : "Aman",
        phoneNumber : 78832
    },
    {
        name:"hima",
        phoneNumber:"788894"
    }
]

app.get('/', function(req, res){
    // console.log(__dirname);
    //res.send(" This is the home page");

    // Contact.find({}, function (err, contact){
    //     if(err){
    //         console.log("Error in fetching from db");
    //         return ;
    //     }
    //     return res.render('home', {
    //         title : "My Contact List",
    //         contact_list : contact
    //     });
    // })

    Contact.find({}).then((contact, err)=>{
        if(err){
            console.log("Error in fetchig the data from database", err);
            //  console.log("The error is  " + err);
            // console.log(contact);
             return ;
        };
        
        return res.render('home', {
            title : "My Contact List", 
            contact_list : contact
        });
    });

    
});

app.get('/playground', function(req, res){
    return res.render('playground', {
        title : "Playground EJS",
        paragra : "Let's us play in the playground, it is very big. :)"
    })
});

app.post('/add-contact', function(req, res){
    console.log(req.body);
    // contactList.push(req.body);

    Contact.create({
        name: req.body.name,
        phoneNumber : req.body.phoneNumber
    }).then((err, newContact)=>{
        if(err){
            console.log(err);
            return ;
        }
        console.log(newContact);
        return res.redirect('back');
    })

    // return res.redirect('/');
});

app.get('/profile', function(req, res){
    res.send("This is the profile page");
})

// Delet the contact

app.get('/delete-contact' , function(req, res){
    console.log(req.params);
    //get id
    let id = req.query.id;
    // let currInd = contactList.findIndex(contact => phone == contact.phoneNumber);
    // if(currInd != -1){
    //     contactList.splice(currInd , 1);
    // }
    Contact.findByIdAndDelete(id).then((err)=>{
        if(err){
            console.log(err);
            return;
        }
        return res.redirect('/');
    });
    

})




app.listen(port, function(err){
    if(err){
        console.log("Error has been found : " + err);
        return;
    }
    console.log("Server is running in the port " + 8000);
})