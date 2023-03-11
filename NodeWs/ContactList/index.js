const express = require('express');
const path = require('path');
const port = 8000;

const app = express();

// We are now telling the express js to use ejs to use as view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function(req, res){
    // console.log(__dirname);
    //res.send(" This is the home page");
    return res.render('home', {title : "My Contact List"});
});

app.get('/playground', function(req, res){
    return res.render('playground', {
        title : "Playground EJS",
        paragra : "Let's us play in the playground, it is very big. :)"
    })
});

app.get('/profile', function(req, res){
    res.send("This is the profile page");
})




app.listen(port, function(err){
    if(err){
        console.log("Error has been found : " + err);
        return;
    }
    console.log("Server is running in the port " + 8000);
})