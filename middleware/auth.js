const moment = require('moment');
const startDay= moment.weekdays(2);
const endDay= moment.weekdays(6);
const startHour= moment('09:00:00', "hh:mm:ss")
const endtHour= moment('17:00:00', "hh:mm:ss")
const isAuth= function(req, res, next){
let durationday= moment().isBetween(startDay, endDay);
let durationHour= moment().isBetween(startHour, endtHour);
(durationday && durationHour) ? 
next() :
res.status(401).send("you are not authorized come-back... soon!")

}

module.exports= isAuth;