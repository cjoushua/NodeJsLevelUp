/* async function httpRequestCall(options) {
    let timeJson.before = getTime();
    let myRequest = () =>{
       request(options)
           .then((response) => {
                let statusCode = JSON.stringify(response.statusCode);
                let responseData = response.body.data;

                console.log("Response: " + responseData);

                timeJson.after = getTime();
                httpTimes.push(timeJson); //array of all times
                checkRecursion(index++); //I'm using recursion

           .catch((err) => {
               console.log("Error: " + err);

               timeJson.after = getTime();
               httpTimes.push(timeJson);
               checkRecursion(index++);
            })

   }

   await myRequest();
}


var request = require('request');

request('http://www.google.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Print the google web page.
  }
}) */