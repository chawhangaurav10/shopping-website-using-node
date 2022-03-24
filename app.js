//const http = require('http');

//const routes = require('./routes');
//const server = http.createServer(routes.handler);
const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const rootDir = require('./util/path');
const path = require('path');


const app = express();

app.set('view engine','ejs');
app.set('views','views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoutes.routes);
app.use(shopRoutes);
app.use((req,res,next)=>{
    //res.status(404).sendFile(path.join(rootDir,'views', '404.html'));
    res.status(404).render('404',{pageTitle:'Page not found!'});
});

//const server = http.createServer(app);
//server.listen(3000);

app.listen(3000);