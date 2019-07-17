const path = require( 'path' );
const express = require( 'express' );
const hbs = require( 'hbs' );

const app = express( );

// Define paths for Express config
const publicDirectoryPath = path.join( __dirname, '../public' );
const viewsPath = path.join( __dirname, '../templates/views' );;
const partialsPath = path.join( __dirname, '../templates/partials' );;

// Setup handlebars engine and views location
app.set( 'view engine', 'hbs' );
app.set( 'views', viewsPath );
hbs.registerPartials( partialsPath );

// Setup static directory to serve
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
        title: 'Help',
        name: 'Andrew Mead',
        msg: "I'm trying to help you out."
    });
});

app.get( '/products', ( req, res ) => {
    if ( !req.query.search ) {
        return res.send({
            error: 'You must provide a search term'
        });
    }
    console.log( req.query );
    res.send({
        products: []
    });
});

app.get( '/weather', ( req, res ) => {
    if ( !req.query.address ) {
        return res.send({
            error: 'You must provide an address!'
        });
    }
    var address = req.query.address;
    res.send({
        forecast: 'New York. It is currently 37 degrees out. There is a 47% chance of rain.',
        location: 'New York',
        latitude: 47,
        longitude: -23,
        temperature: 37,
        chanceRain: 47,
        address
    });
});

app.get( '/help/*', ( req, res ) => {
    res.render( '404', {
        title: '404 Not Found',
        name: 'Andrew Mead',
        msg: 'Help article not found.'
    });
});

app.get( '*', ( req, res ) => {
    res.render( '404', {
        title: '404 Not Found',
        name: 'Andrew Mead',
        msg: 'Page not found.'
    });
});

app.listen( 3000, ( ) => {
    console.log( 'Server is up on port 3000.' );
});