const http = require('http');
const port = 8000;
const fs = require('fs');

function handleRequest(req, res){
    console.log(req.url);
    res.writeHead('200' , {'content-type' : 'text/html'});

    let filePath;
    let request = req.url;
    if(request === '/'){
        filePath = './index.html';
    }else if(request === '/profile'){
        filePath = './profile.html';
    }else{
        filePath = './404.html'
    }


    fs.readFile(filePath, function(err, data){
        if(err) {
            console.log(err);
            return;
        }
        return res.end(data);
    })
}

const server = http.createServer(handleRequest);

server.listen(port, function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("Server is running at port " + port);
});

