class callApi implements icallApi{
    isSuccess:string;
    constructor(postData:string){
        this.isSuccess= "isSuccess";
    }

    callfailed() :string {
        this.isSuccess = "doCallApiFailed()";
        return this.isSuccess;
    }

    doCall(){
        this.isSuccess = "doCallApi()";
        return this.isSuccess;
    }
}

let postData = "goGoogleApi";
var callGoogleApi = new callApi(postData);

console.log(postData);

console.log(callGoogleApi.isSuccess);

console.log(callGoogleApi.callfailed());

console.log(callGoogleApi.doCall());