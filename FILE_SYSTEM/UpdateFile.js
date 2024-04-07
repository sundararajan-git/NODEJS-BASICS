

    const  fs  = require('fs')

    const  path = require('path');


    fs.writeFile(path.join(__dirname, "Update.txt"), ' World war ', (err) => {

        if (err) throw err;
        console.log("writing completed");     
        
        fs.appendFile(path.join(__dirname, "Update.txt"), 'word'), (err) => {
            console.log(err);
            if (err) throw err;
            console.log("update completed");
        }

    } )


    process.on('uncaughtException', err => {
        console.error(`There was an uncaught error:  ${err}`)
        process.exit(1)


    })
