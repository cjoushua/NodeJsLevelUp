
interface icallApi{
    doCall();
}

class callApi implements icallApi{
    isSuccess:string;
    constructor(postData:string){
        this.isSuccess = "isSuccess";
    }

    callfailed() :string {
        return "doCallApiFailed()";
    }

    doCall(){
        return "doCallApi()";
    }
}

var request = require('request');
request('http://www.google.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Print the google web page.
  }
})

let postData = "goGoogleApi";

var callGoogleApi = new callApi(postData);
console.log(postData);

console.log(callGoogleApi.isSuccess);

console.log(callGoogleApi.callfailed());

console.log(callGoogleApi.doCall());



