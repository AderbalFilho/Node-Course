const path = require( 'path' );
const express = require( 'express' );

const app = express( );
const publicDirectoryPath = path.join( __dirname, '../public' );

app.set( 'view engine', 'hbs' );
app.use( express.static( publicDirectoryPath ) );

app.get( '', ( req, res ) => {
    res.render( 'index', {
        title: 'Weather',
        name: 'Andrew Mead'
    });
});

app.get( '/about', ( req, res ) => {
    res.render( 'about', {
        title: 'About Me',
        name: 'Andrew Mead'
    });
});

app.get( '/help', ( req, res ) => {
    res.render( 'help', {
        title: 'About Me',
        name: 'Andrew Mead',
        msg: "I'm trying to help you out."
    });
});

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