const fs = require( "fs" );
const path = require( "path" );

function buildTemplate( template, input )
{
	const fileName = `${ template }.html`;
	const filePath = path.join( __dirname, "templates", fileName );
	
	let content;
	
	try {
		content = fs.readFileSync( filePath, "utf8" )
	}
	catch( error ) {
		console.log( error );
	}
	
	const keys = Object.keys( input ).reduce( ( acc, value ) => {
		acc[ `{{${ value }}}` ] = input[ value ];
		
		return acc;
	}, { } );
	
	const regex = new RegExp( Object.keys( keys ).join( "|" ), "gi" );
	const result = content.replace( regex, ( matched ) => keys[ matched ] );
	
	return result;
}

module.exports = buildTemplate;