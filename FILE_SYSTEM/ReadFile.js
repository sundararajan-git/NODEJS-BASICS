
//  -------------- WITHOUT ES6 MODULES ------------------

// CALL THE FILE MODULE
const fs = require('fs')

fs.readFile('./Read.txt', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
})

// CATCH THE ERROR 
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error:  ${err}`)
    process.exit(1)
})




// -------------------- WITH ES6 MODULES -------------------

//  1. CHANGE THE EXTENTION NAME  .JS TO  .MJS  THEN RUN THE CODE  ( CMT - NODE FILENMAE.MJS )

// import { readFile } from 'node:fs';


// readFile('./Text.txt', (err, data) => {
//     if (err) throw err;
//     console.log(data.toString());
// })


// process.on('uncaughtException', err => {
//     console.error(`There was an uncaught error:  ${err}`)
//     process.exit(1)
// })
