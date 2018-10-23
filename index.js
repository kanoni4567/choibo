const express = require('express');
const path = require('path');
// const passport = require('passport');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const keys = require('./config/keys');
const contentful = require('./contentful/contentful');
require('./models/User');
// require('./services/passport');
const app = express();

mongoose.connect(keys.mongoURI);

const User = mongoose.model('users');

// initialize body-parser to parse incoming parameters requests to req.body
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// initialize cookie-parser to allow us access the cookies stored in the browser.
app.use(cookieParser());

app.use(
	session({
		key: 'user_sid',
		secret: keys.cookieKey,
		resave: false,
		saveUninitialized: false,
		cookie: {
			expires: 600000
		}
	})
);

app.use((req, res, next) => {
	if (req.cookies.user_sid && !req.session.user_id) {
		res.clearCookie('user_sid');
	}
	next();
});

// app.use(
// 	cookieSession({
// 		maxAge: 30 * 24 * 60 * 60 * 1000,
// 		keys: [keys.cookieKey]
// 	})
// );

app.use(morgan('dev'));

// app.use(passport.initialize());
// app.use(passport.session());

app.use(express.static(path.join(__dirname, 'client/build')));

// app.post(
// 	'/api/login',
// 	passport.authenticate('local', { failureRedirect: '/login' }),
// 	function(req, res) {
// 		console.log(req);
// 		res.redirect('/');
// 	}
// );

app.post('/api/login', (req, res) => {
	let username = req.body.username;
	let password = req.body.password;

	User.findOne({ username: username }).then(userfound => {
		console.log(userfound);
		if (!userfound) {
			res.redirect('/login');
		} else if (password != userfound.password) {
			res.redirect('/login');
		} else {
			req.session.user_id = userfound._id;
			console.log(req.session);
			res.redirect('/');
		}
	});
});

app.get('/api/currentuser', (req, res) => {
	console.log('currentuser get');
	console.log(req.session);
	if (req.session.user_id) {
		User.findOne({ _id: req.session.user_id }).then(userfound => {
			console.log(userfound);
			res.send(userfound);
		});
	}
});

app.get('/api/logout', function(req, res, next) {
	if (req.session) {
		// delete session object
		req.session.destroy(function(err) {
			if (err) {
				return next(err);
			} else {
				return res.redirect('/');
			}
		});
	}
});
// app.get('/api/logout', function(req, res) {
// 	req.logout();
// 	res.redirect('/');
// });

// app.get('/api/current_user', (req, res) => {
// 	res.send(req.user);
// });

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
