// keys.js - credential logic
if (process.env.NODE_ENV === 'production') {
	module.exports = require('./prod');
} else {
	console.log(process.env.NODE_ENV);
	module.exports = require('./dev');
}

// module.exports = require('./prod');
