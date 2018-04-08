
/* ForEach
接著讓我們透過 forEach 並搭配 () => {} 來讓你的程式更加簡短但是達到跟上面相同效果。 
但是ForEach無法處理同步，如果要處理同步要改用map
*/

var materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];


//等同
//materials.forEach(material => console.log(material));

//等同
//materials.forEach((material) => { console.log(material); });

//等同
//materials.forEach(function (material) { console.log(material) });

//等同
//materials.forEach(function materialForEach (material) { console.log(material) });

//等同
//materials.forEach(function materialForEach(material) : void { console.log(material) });

//等同
//materials.forEach(function materialForEach(material:any) : any { console.log(material) });

//等同
materials.forEach(function materialForEach(material:string) : any { console.log(material) });