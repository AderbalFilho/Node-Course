const geocode = require( './utils/geocode' );
const forecast = require( './utils/forecast' );

// I'm not going to make any account!

const address = process.argv[2];

if ( !address ) {
    console.log( 'Please provide an address' );
} else {
    geocode( address, ( error, data ) => {
        if ( error ) {
            console.log('Error', error);
        }
        if ( data ) {
            forecast( data.latitude, data.longitude, ( error, forecastData ) => {
                if ( error ) {
                    return console.log('Error', error);
                }
                console.log(data.location);
                console.log(forecastData);
            });
        }
    });
}