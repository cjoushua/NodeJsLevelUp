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

let postData = "goGoogleApi";
var callGoogleApi = new callApi(postData);

console.log(postData);

console.log(callGoogleApi.isSuccess);

console.log(callGoogleApi.callfailed());

console.log(callGoogleApi.doCall());