const fs = require('fs')


fs.readFile('./content/subfolder/test.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return;
       }
const first = result
fs.readFile('./content/subfolder/test1.txt','utf-8',(err, result)=>{
   if(err){
       console.log(err);
       return;
   }
const second = result;
fs.writeFile("./content/subfolder/result-asyync.txt",'Here is the result : '+first+''+second+'',
(err, result)=>{
   if(err){
       console.log(err);
       return;
   }
   console.log(result)
})
});

});