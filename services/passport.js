const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.use(
	new Strategy(async (username, password, cb) => {
		console.log('Verification function called');
		const existingUser = await User.findOne({ username: username });
		console.log(existingUser);
		if (!existingUser) {
			return cb(null, false);
		}
		if (existingUser.password != password) {
			return cb(null, false);
		}
		return cb(null, existingUser);
	})
);

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id).then(user => {
		done(null, user);
	});
});

// passport.deserializeUser(function(id, cb) {
//   db.users.findById(id, function (err, user) {
//     if (err) { return cb(err); }
//     cb(null, user);
//   });
// });
