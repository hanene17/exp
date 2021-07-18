var express = require('express');
var app = express();
var router = express.Router();
var logger = require('morgan')
var path = require('path')
let home=  require('./home');
let service= require('./service')
let contact= require('./contact')
//let page401 = require('./page401')
var isAuth= require('../middleware/auth')
app.use(express.json()); //bodyparser
app.use(isAuth);
app.use(express.static(__dirname + '/public'));
var currenttime = function (req, res, next) {
  req.currenttime = Date.now();
  next();
};
app.use(currenttime);

app.use(express.static(path.join(__dirname+ 'views')));
/* GET home page. */
app.get('/', home.get_home);
app.get('/service', service.get_service);
app.get('/contact', contact.get_contact);



 //app.use(app.router);
//  app.use('/', router);
//  app.use('/service', router);
//  app.use('/contact', router);


//https://www.linkedin.com/pulse/how-node-js-middleware-process-ayush-neekhra

    // https://expressjs.com/fr/4x/api.html#res.sendFile
    app.use(express.json());
    //app.use(express.urlencoded({ extended: false }));
    //app.use(cookieParser());
    //app.use(express.static(path.join(__dirname, '/public')));
    // app.set('views', path.join(__dirname, 'views'));
    // app.set('view engine', 'pug');
    //  app.get('*', function(req, res, next){
    //   next(res.status(401).render('page401.pug', {title: "Sorry, page not found"}))   ;
    //   });
   
   //router.use(logger());
  
 

 module.exports = app;
