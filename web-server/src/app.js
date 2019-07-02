const path = require( 'path' );
const express = require( 'express' );

const app = express( );
const publicDirectoryPath = path.join( __dirname, '../public' );
app.use( express.static( publicDirectoryPath ) );

app.get( '/weather', ( req, res ) => {
    res.send({
        forecast: 'New York. It is currently 37 degrees out. There is a 47% chance of rain.',
        location: 'New York',
        latitude: 47,
        longitude: -23,
        temperature: 37,
        chanceRain: 47
    });
});

app.listen( 3000, ( ) => {
    console.log( 'Server is up on port 3000.' );
});