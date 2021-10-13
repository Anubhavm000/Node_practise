const fs = require('fs');

const text = fs.readFileSync('./content/subfolder/test.txt','utf-8');

const text1 = fs.readFileSync('./content/subfolder/test1.txt','utf-8');

fs.writeFileSync('./content/subfolder/newFile.txt',"This is my text",{flag:'a'})
console.log(text, text1)

