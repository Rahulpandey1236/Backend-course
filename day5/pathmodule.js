const path = require('path')
console.log(path.sep);//sep represents the platform specific path seperator
console.log(process.env.PATH);

console.log(path.delimiter);//used to for combine and join


//for current path
const currentpathfile = __filename;
console.log(currentpathfile);
console.log(__dirname);

let basename = path.basename(currentpathfile);
console.log(basename);

let pathnamewithoutext = path.basename(currentpathfile,".js")
console.log(pathnamewithoutext);


let dirnme = path.dirname(currentpathfile);
console.log(dirnme);


console.log(path.extname(currentpathfile));
console.log(path.extname('index.md.js'));


let pathtofile = path.format({//this format will combine dir and base
    dir:'/public_html/home',
    base:'index.html'
})

console.log(pathtofile);





//absolute and relative path
console.log('isabsolute',path.isAbsolute(currentpathfile));
console.log('isabsolute',path.isAbsolute('./index.js'));//current folder ke anadar
console.log('isabsolute',path.isAbsolute('../index.js'));



//more path to one 

let pethTodir = path.join('/home','js','dist','index.js')
console.log(pethTodir);


console.log('parse',path.parse(currentpathfile));
console.log('relative path',path.relative('/home/user/config','/home/user/js/'));
console.log('resolve>',path.resolve());
console.log('normalization > ',path.normalize('//node//user//home//js'));










