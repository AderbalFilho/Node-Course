const request = require( 'request' );

// I'm not going to make any account!
const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/37.8267,-122.4233?lang=pt';
const geocodeUrl = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/37.8267,-122.4233?lang=pt';

request( { url: url, json: true }, ( error, response ) => {
    console.log( response.body.daily.data[0].summary + 'It is currently ' + response.body.currently.temperature + ' degrees out. There is a ' + response.body.currently.precipProbability + '% chance fo rain.' );
});

// Geocoding
// Address -> Lat/Long -> Weather
request( { url: geocodeUrl, json: true }, ( error, response ) => {
    console.log( 'Latitude: ' + response.body.features[0].center[1] + '. Longitude: ' + response.body.features[0].center[0] + '.' );
});