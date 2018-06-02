import * as moment from "moment";

function lastMonth(nowDay) {  
    let nowDay1 = moment(nowDay).format('YYYY-MM-DD');
    var month1 = moment(nowDay).get('month');   
    var year1 = moment(nowDay).get('year');  
    var day1 = moment(nowDay).get('day');
    var monthStr;  
    var lastmonth;  


    if (month1 < 9 && month1 > 0) {  
        monthStr = year1 + '-0' + month1;  
        var  number1 = moment(monthStr , "YYYY-MM").daysInMonth();  
        lastmonth = moment(nowDay).add(-number1, 'days').format('YYYY-MM-DD');  
    }  
    else if(month1 === 0) {  
        monthStr = year1-1 + '-' + 12;  

        if(day1 > 9) {  
            monthStr = monthStr + '-' + day1;  
        } else {  
            monthStr = monthStr + '-0' + day1;  
        }  

        lastmonth = moment(monthStr).format('YYYY-MM-DD');  
    } else {  
        monthStr = year1 + '-' + month1;  
        var  number1 = moment(monthStr , "YYYY-MM").daysInMonth();  
        lastmonth = moment(nowDay).add(-number1, 'days').format('YYYY-MM-DD');  
    }  

    return lastmonth;  
}  


let LastMonthStr = lastMonth(new Date());
console.log(LastMonthStr);


