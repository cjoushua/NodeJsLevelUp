var abc = "test/abcd{string1}test{string2}test{(GGG)}"; //any string
var regex = /{(.+?)}/g;
var match, results = [];
while (match = regex.exec(abc)) {
    results.push(match[1]);   // save first captured parens sub-match into results array
}

results.map((arr)=>{

    console.log(arr);
})