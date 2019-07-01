const request = require( 'request' );
const geocode = require( './utils/geocode' );

// I'm not going to make any account!
const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/37.8267,-122.4233?lang=pt';
const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pv0G8ybW90MDFhazNxcnJ40TYydzJl0SJ9.njY7HvaalLEVhEOIghPTlw&limit=1';

// request( { url: url, json: true }, ( error, response ) => {
//     if ( error ) {
//         console.log( 'Unable to connect to weather service!' );
//     } else if ( response.body.error ) {
//         console.log( 'Unable to find location' );
//     } else {
//         console.log( response.body.daily.data[0].summary + 'It is currently ' + response.body.currently.temperature + ' degrees out. There is a ' + response.body.currently.precipProbability + '% chance fo rain.' );
//     }
// });

// request( { url: geocodeUrl, json: true }, ( error, response ) => {
//     if ( error ) {
//         console.log( 'Unable to connect to location services!' );
//     } else if ( response.body.features.length === 0 ) {
//         console.log( 'Unable to find location. Try another search.' );
//     } else {
//         console.log( 'Latitude: ' + response.body.features[0].center[1] + '. Longitude: ' + response.body.features[0].center[0] + '.' );
//     }
// });

geocode( 'Boston', ( error, data ) => {
    console.log('Error', error);
    console.log('Data', data);
});