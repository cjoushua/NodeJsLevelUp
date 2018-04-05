/* 如果你希望遍歷陣列內的每個內容，然後修改原始陣列，那麼 map 就是你的好夥伴。先看看以往的做法是如何。
JavaScript 陣列裡常使用的 .map() 方法，但是 .map() 方法內的處理函數是同步的（synchronous），也就是如果我們想在裡面跑非同步的邏輯，是沒辦法等到我們非同步的工作完成的。 */
var arrs = [1, 2, 3];

let resultarr = arrs.map((val) => {  
    return val * 2;
})

console.log(resultarr); // [2, 4, 6]  