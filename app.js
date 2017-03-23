var app = {};

app.drivers = {};
app.drivers.express = require('./drivers/express');
app.drivers.mysql = require('./drivers/mysql')
app.drivers.express.init();


app.controllers = {};
app.controllers.route = require('./controllers/routes')(app);

app.models = {};
app.models.cocktail = require('./models/cocktail');



