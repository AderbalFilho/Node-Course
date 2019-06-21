const chalk = require( 'chalk' );
const notes = require( './notes.js' );

const command = process.argv[2];

if ( command === 'add' ) {
    console.log( 'Addind note!' );
} else if ( command === 'remove' ) {
    console.log( 'Removing note!' );
}