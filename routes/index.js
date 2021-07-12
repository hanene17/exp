var express = require('express');
var app = express();
var router = express.Router();
var logger = require('morgan')
var path = require('path')
let home=  require('./home');
let service= require('./service')
let contact= require('./contact')
const isAuth= require('../middleware/auth')

/* GET home page. */
router.get('/', home.get_home);
 router.get('/service', service.get_service);
 router.get('/contact', contact.get_contact);

app.use(express.json()); //bodyparser
router.use(isAuth);
//https://www.linkedin.com/pulse/how-node-js-middleware-process-ayush-neekhra
var requestTime = function (req, res, next) {

    req.requestTime = Date.now()
    
    next()
    
    }
    router.use(requestTime)
    // https://expressjs.com/fr/4x/api.html#res.sendFile
   router.use(express.static(path.join(__dirname,  'views')))
    //router.use(logger());
  
  router.get('/',(req,res)=>{
        res.sendFile(path.join(__dirname,  '/views/home.pug'))
        var responseText = 'Requested at:';
        responseText +=  req.requestTime + 'ms';
        console.log(responseText)
        })
        router.get('/service',(req,res)=>{
            res.sendFile(path.join(__dirname,  '/views/service.pug'))
            var responseText = 'Requested at:';
            responseText +=  req.requestTime + 'ms';
            console.log(responseText)
            })
            router.get('/contact',(req,res)=>{
                res.sendFile(path.join(__dirname,  '/views/contact.pug'))
                var responseText = 'Requested at:';
                responseText +=  req.requestTime + 'ms';
                console.log(responseText)
                })

 module.exports = router;
