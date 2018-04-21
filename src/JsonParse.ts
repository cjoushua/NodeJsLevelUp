
export class JsonRegex {

    constructor() {
        let jsonString = '[{"name":"AndyHunt","title":"BigBoss","age":68,"bonus":true},{"name":"CharlesMack","title":"JrDev","age":24,"bonus":false}],[{"sdfsd"}]'
        let abc = "test/abcd{string1}test{string2}test{(GGG)}";
        let data = JSON.stringify(jsonString);
        let match, results = [];
        //let regex = /{(.+?)}/g;
        //let regex = /([*]+)/g;
        //let regex = /\[\w+\]/g;
        let regex = /\{.+\}/g; //取出大刮號內的值

        while (match = regex.exec(jsonString)) {
            results.push(match[0]);   // save first captured parens sub-match into results array
        }
        
        results.map((arr)=>{
        
            console.log(arr);
        })
    }
}

let a = new JsonRegex();
