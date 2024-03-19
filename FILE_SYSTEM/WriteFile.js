
const  fs = require("fs")
const  path =  require("path")

fs.writeFile(path.join(__dirname , "Write.txt") , 
'World war 3', (err)=>{
 if (err) throw err;
 console.log ("writing completed");
})


process.on('uncaughtException', err =>{
 console. error(`There was an uncaught error:  ${err}`)
 process. exit (1)


})
