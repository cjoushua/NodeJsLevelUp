import * as moment from "moment";
var sd=new Date("2018-04-11 07:15" );
var ed=new Date("2018-04-11 20:15" );

//moment().format('YYYY-MM-DD HH:mm')
//moment().format('HH');



let hourST = moment(sd);
let hourED = moment(ed);
let workhour = ((hourED.unix() - hourST.unix()))/3600; 


console.log(workhour);