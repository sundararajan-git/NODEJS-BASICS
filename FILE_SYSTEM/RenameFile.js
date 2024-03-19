
        const fs = require('fs')

        const path = require('path')

        fs.writeFile(path.join(__dirname , "Rename.txt") ,'World war', (err)=>{
        if (err) throw err;
        console.log ("writing completed");

        fs.appendFile(path.join(__dirname , "Rename.txt") ,
            '\n World war 1', (err)=>{
            if (err) throw err;
            console.log ("update completed");

        fs.rename(path.join(__dirname , "Rename.txt") ,       
            path.join(__dirname , "order.txt") , (err)=>{
            if (err) throw err;
            console.log ("Rename completed");
        })
        })
        })




        process.on('uncaughtException', err =>{
        console. error(`There was an uncaught error:  ${err}`)
        process. exit (1)


        })
