
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
  
 
  materials.forEach((val) => {  
      console.log(val);
  })


  //非同步時會return undefined
  console.log(materials.forEach((material)=>{return material;}));
  //等同
  console.log(materials.forEach(material=>material));