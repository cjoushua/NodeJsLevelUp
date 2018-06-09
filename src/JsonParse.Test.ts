import { expect } from 'chai';
import 'mocha';
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
        return results;
    }
}

let a = new JsonRegex();
let b = expect(a[0]).to.equal('{"name":"AndyHunt","title":"BigBoss","age":68,"bonus":true},{"name":"CharlesMack","title":"JrDev","age":24,"bonus":false}],[{"sdfsd"}');

let c = expect(0).to.equal(0);
b
c