const fs = require('fs')

let readStream = fs.createReadStream('./docs/text.txt', {encoding: 'utf-8'})
let WriteStream = fs.createWriteStream('./docs/text2.txt')
//readStream.on('data',(chunk)=>{
//console.log(chunk);
//WriteStream.write(chunk);
//})

readStream.pipe(WriteStream)