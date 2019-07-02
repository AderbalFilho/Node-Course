const express = require( 'express' );

const app = express( );

app.get( '', ( req, res ) => {
    res.send( '<h1>Weather</h1>' );
});

app.get( '/help', ( req, res ) => {
    res.send([
        {
            name: 'Andrew',
            age: 27
        },
        {
            name: 'Sarah',
            age: 25
        }
    ]);
});

app.get( '/about', ( req, res ) => {
    res.send( '<h1>About page</h1>' );
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