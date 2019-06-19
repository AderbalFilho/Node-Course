const validator = require( 'validator' );
const notes = require( './notes.js' );

console.log( notes( ) );

console.log( validator.isEmail( 'myname@example.com' ) );
console.log( validator.isURL( 'https://mead.io' ) );