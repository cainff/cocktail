var mysql = require('mysql');   
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');


module.exports = function(app) {
    var server = app.drivers.express.server;
    
    server.get('/', function(req,res){
        res.sendFile(path.resolve('views/html/cocktail.html'));
    });
    
    server.get('/page', function(req,res){
        res.send('Autre page');
    });
    
    server.use(bodyParser.json()); // to support JSON-encoded bodies
    server.use(bodyParser.urlencoded({ // to support URL-encoded bodies
        extended: true
    }));
    
server.use('/css', express.static(__dirname + '/../views/css'));
server.use('/js', express.static(__dirname + '/../views/js'));
 
    

// Create a cocktail

server.post('/api/cocktail', function(req, res){
    
    var cocktails = new app.models.cocktail(app, {
        name : req.body.name,
        ingredient : req.body.ingredient,
        ingredient2 : req.body.ingredient2,
        ingredient3 : req.body.ingredient3,
        ingredient4 : req.body.ingredient4
    });
    
    cocktails.register(function(rows){
        res.send(rows);
    });
});

 //Get cocktail infos

server.get('/api/cocktail', function(req, res){
    
    var cocktails = new app.models.cocktail(app, {
        id : req.query.id
    });
    
    cocktails.get(function(rows){
        res.send(rows);
    })
})

//Delete Cocktail 

server.delete('/api/cocktail', function(req,res){
        
        var cocktails = new app.models.cocktail(app,{
                name : req.body.name        
        });
                
        cocktails.remove(function(rows){
            res.send(rows);
        }); 
        
    });
    
    }       