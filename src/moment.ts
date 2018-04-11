import * as moment from "moment";
var sd=new Date("2018-04-11 07:15" );
var ed=new Date("2018-04-11 20:15" );

//moment().format('YYYY-MM-DD HH:mm')
//moment().format('HH');



let hourST = moment(sd);
let hourED = moment(ed);
//moment的unix()函數,這個函數用於取unix()時間差來計算日期相差多久。
let workhour = ((hourED.unix() - hourST.unix()))/3600; 


console.log(workhour);