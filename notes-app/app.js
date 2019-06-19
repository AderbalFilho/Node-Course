const fs = require('fs');

// fs.writeFileSync( 'notes.txt', 'My name is ˜Put here your name˜!' );
// fs.writeFileSync( 'notes.txt', ' My name is ˜Put here your name˜!', { flag: 'a' } );
fs.appendFileSync( 'notes.txt', ' My name is ˜Put here your name˜! ' );