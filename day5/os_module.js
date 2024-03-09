const os = require('os')
// console.log(os);

console.log("cpu architecture" + os.arch());
console.log("free memory" + os.freemem());
console.log("total memoey" + os.totalmem());
 
console.log("network interfaces" + os.networkInterfaces());
console.log("temp dir" + os.tmpdir());


console.log(os.endianness());
console.log(os.type());
console.log(os.hostname());
console.log(os.release());