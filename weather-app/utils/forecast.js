const request = require( 'request' );

const forecast = ( latitude, longitude, callback ) => {
    const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/' + latitude + ',' + longitude + '?lang=pt';

    request( { url: url, json: true }, ( error, response ) => {
        if ( error ) {
            callback( 'Unable to connect to weather service!', undefined );
        } else if ( response.body.error ) {
            callback( 'Unable to find location', undefined );
        } else {
            callback( undefined, response.body.daily.data[0].summary + 'It is currently ' + response.body.currently.temperature + ' degrees out. There is a ' + response.body.currently.precipProbability + '% chance fo rain.' );
        }
    });
}

module.exports = forecast;