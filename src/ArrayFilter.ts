//透過 filter，在遍歷陣列內容的同時，你可以回傳布林值來決定要不要將這個值留在陣列內。
var ueridarr    = ['1', '2', '3', '4','U206d25c2ea6bd87c17655609a1c37cb8'],  
    newArr = [];
    var re = "^U[0-9a-f]{32}$";

/* for(var i = 0; i < ueridarr.length; i++) {  
    if(ueridarr[i].match(re)) {
        newArr.push(ueridarr[i]);
    }
} */
ueridarr.forEach((i)=>{
    if(i.match(re)) {
        newArr.push(i);
    }
});
console.log(newArr); // [3, 4]  