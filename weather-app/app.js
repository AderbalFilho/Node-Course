const geocode = require( './utils/geocode' );
const forecast = require( './utils/forecast' );

// I'm not going to make any account!

geocode( 'Boston', ( error, data ) => {
    console.log('Error', error);
    console.log('Data', data);
});

forecast( -75.7088, 44.1545, ( error, data ) => {
    console.log('Error', error);
    console.log('Data', data);
});