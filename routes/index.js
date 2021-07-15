var express = require('express');
var app = express();
var router = express.Router();
var logger = require('morgan')
var path = require('path')
let home=  require('./home');
let service= require('./service')
let contact= require('./contact')
//let page401 = require('./page401')
const isAuth= require('../middleware/auth')

/* GET home page. */
router.get('/', home.get_home);
 router.get('/service', service.get_service);
 router.get('/contact', contact.get_contact);

 //app.use(app.router);
 app.use('/', router);
 app.use('/service', router);
 app.use('/contact', router);

app.use(express.json()); //bodyparser
app.use(isAuth);
//https://www.linkedin.com/pulse/how-node-js-middleware-process-ayush-neekhra

    // https://expressjs.com/fr/4x/api.html#res.sendFile
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    //app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'pug');
    app.get('*', function(req, res){
        res.status(401).render('page401.pug', {title: "Sorry, page not found"});
      });
   
   //router.use(logger());
  
 

 module.exports = router;
