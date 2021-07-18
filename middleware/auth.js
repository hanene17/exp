var path = require('path')
const moment = require('moment');
const startDay= moment.weekdays(2);
const endDay= moment.weekdays(6);
const startHour= moment('09:00:00', "hh:mm:ss")
const endtHour= moment('17:00:00', "hh:mm:ss")
const isAuth= function(req, res, next){
let durationday= moment().isBetween(startDay, endDay);
let durationHour= moment().isBetween(startHour, endtHour);

if(durationday || durationHour) {
    next()
}
    //res.status(401).sendFile(path.join(__dirname +"/views/page401.pug"));
    //, {title: "Sorry, page not found"}
//    else {
//        res.sendFile(__dirname + "/views/page401.pug");
//    console.log(__dirname+ "/views/page.pug") }
else {
    console.log("Sorry, page not found");
    res.status(401).sendFile(__dirname+ '/page401.html', {title: "Sorry, page not found"})
  
}
      
         //res.status(401).send("you are not authorized come-back... soon!")




}

module.exports= isAuth;
