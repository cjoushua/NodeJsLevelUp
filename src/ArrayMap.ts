/* 如果你希望遍歷陣列內的每個內容，然後修改原始陣列，那麼 map 就是你的好夥伴。先看看以往的做法是如何。
JavaScript 陣列裡常使用的 .map() 方法，但是 .map() 方法內的處理函數是同步的（synchronous），也就是如果我們想在裡面跑非同步的邏輯，是沒辦法等到我們非同步的工作完成的。 */

// 相同的陣列
var peoples = [
  {
    name: 'Casper',
    like: '鍋燒意麵',
    age: 18
  },
  {
    name: 'Wang',
    like: '炒麵',
    age: 24
  },
  {
    name: 'Bobo',
    like: '蘿蔔泥',
    age: 1
  },
  {
    name: '滷蛋',
    like: '蘿蔔泥',
    age: 3
  }
];


// 比較大於五歲的
var mapAgeThan5_1 : boolean[] = peoples.map((item)=>item.age > 5);
console.log(mapAgeThan5_1); 

var peopleEat : string[] = peoples.map((people)=>{
    if (people.like !== '蘿蔔泥') {
      return `${people.like} 好吃`;
    } else {
        return `${people.like} 不好吃`;
    }
  });
  console.log(peopleEat);