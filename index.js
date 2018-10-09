const express = require('express');
const path = require('path');
const contentful = require('./contentful/contentful');
const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/getallposts', function(req, res) {
	// console.log('getallposts');
	contentful.fetchAll().then(postList => {
		// console.log(postList);
		res.send(postList);
	});
});

app.get('/getpost/:id', function(request, response) {
	var id = request.params.id;
	contentful.fetchPost(id).then(post => {
		response.send(post);
	});
});

app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
