//let os = require('os');
//console.log(os.platform(),os.homedir());
let fs = require ('fs');
//console.log(fs);
//fs.readFile('./docs/text.txt','utf-8',(err,data)=>{

  //  if(err) throw err
    //console.log(data.toString());
//})
//fs.writeFile('./docs/text2.txt','Merhaba Tekrar',(err)=>{
//if(err) throw err 
//console.log('yazma basarili');

//})
if(!fs.existsSync('./assets')){
fs.mkdir('./assets',(err)=>{
    if(err) throw err
    console.log('klasor olustu')
})
}else{
fs.rmdir('./assets',(err)=>{
    if(err) throw err
    console.log('klasor silindi');

})}
//fs.mkdir('./assets',(err)=>{
//if(err) throw err
    //console.log('klasor silindi');
//})
fs.unlink('./docs/text2.txt',(err)=>{
if(err) throw err
console.log('dosya silindi');

})