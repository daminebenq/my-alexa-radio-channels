
const fs = require('fs');
// Load a picture
let html = fs.readFileSync('./index.html');
// let js = fs.readFileSync('./index.js');
/**
* A basic Hello World function
* @param {string} name Who you're saying hello to
* @returns {object.http}
*/
module.exports = async (name = 'world', context) => {

	let identifier = context.service.identifier;
	let user = identifier.split('.')[0];
	let service = identifier.split('.')[1].replace(/\[|\]/gmi, '');
	
	let user_collection_url = `https://${user}.api.stdlib.com/${service}/`;

	let pageHTML = html;
	pageHTML = pageHTML.toString().replace(/user_url/gm, user_collection_url);

	let pageObject = {
		headers: { 'content-type': 'text/html' },
		body: pageHTML
	};

	return pageObject;
};
