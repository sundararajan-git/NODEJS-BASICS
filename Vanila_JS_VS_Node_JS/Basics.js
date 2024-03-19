
  //  1. GOLBAL 
  
  console.log(global);


 // 2.OS 
 
 const os = require('os');

 console.log(os.type());

 console.log(os.version());

 console.log(os.homedir());


// 3. Default Common Core Modules 

// const os = require( 'os');

const path = require( 'path');

console.log (__dirname);

console.log (__filename);

console.log ("--------");

console.log(path.dirname(__filename))

console.log(path.basename(__filename));

console.log(path.extname(__filename));

console.log(path.parse(__filename));

//  4. Module import and export function 

const  math =   require('./Math')

console.log(math.add(3,3));
console.log(math.sub(3,3));
console.log(math.mul(3,3));
console.log(math.div(3,3));

