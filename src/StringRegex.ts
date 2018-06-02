var abc = "test/abcd{string1}test{string2}test{(GGG)}"; //any string
var regex = /{(.+?)}/g;
var match, results = [];
while (match = regex.exec(abc)) {
    results.push(match[1]);   // save first captured parens sub-match into results array
}

results.map((arr)=>{

    console.log(arr);
})


let strr = "first part:second part:third part:fourth part: fifth part: etc";
console.log(strr.match(/(.*?):(.*?):(.*)/).slice(1));

console.log(strr.match(/(.*?):(.*?):(.*)/).slice(2));

console.log(strr.match(/(.*?):(.*?):(.*)/).slice(0));


let strex = "{ 's-env': \n   { 'b1:trackingip': \n.  { .."

console.log(strex.replace(/(\\n| |\t|\r|\n)/g, ''));