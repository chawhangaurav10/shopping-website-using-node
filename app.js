//const http = require('http');

//const routes = require('./routes');
//const server = http.createServer(routes.handler);
const express = require('express');
const bodyParser = require('body-parser');


const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require('path');
const errorController = require('./controller/error');


const app = express();

app.set('view engine','ejs');
app.set('views','views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoutes.routes);
app.use(shopRoutes);
app.use(errorController.get404);

//const server = http.createServer(app);
//server.listen(3000);

app.listen(3000);