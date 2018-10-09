const contentful = require('contentful');
const keys = require('../config/keys');

const client = contentful.createClient({
	// This is the space ID. A space is like a project folder in Contentful terms
	space: keys.space,
	// This is the access token for this space. Normally you get both ID and the token in the Contentful web app
	accessToken: keys.accessToken
});

const fetchPost = entryId => {
	const client = contentful.createClient({
		// This is the space ID. A space is like a project folder in Contentful terms
		space: keys.space,
		// This is the access token for this space. Normally you get both ID and the token in the Contentful web app
		accessToken: keys.accessToken
	});
	// request an entry with the specified ID from the space defined at the top, using a space-specific access token.
	const request = client
		.getEntry(entryId)
		// .then(entry => console.log(entry))
		.catch(err => console.log(err));

	return request;
};

const fetchAll = () => {
	const client = contentful.createClient({
		// This is the space ID. A space is like a project folder in Contentful terms
		space: keys.space,
		// This is the access token for this space. Normally you get both ID and the token in the Contentful web app
		accessToken: keys.accessToken
	});
	// This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
	const request = client
		.getEntries({
			content_type: 'blogPost'
		})
		.catch(err => console.log(err));
	return request;
};

module.exports = {
	fetchPost,
	fetchAll
};
