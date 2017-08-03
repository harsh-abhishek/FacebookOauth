// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

	'facebookAuth' : {
		'clientID' 		: '121009168534353', // your App ID
		'clientSecret' 	: '22cd582c948babacca253ffc3349aeec', // your App Secret
		'callbackURL' 	: 'https://facebookoauth1.herokuapp.com/auth/facebook/callback'
	},

	'twitterAuth' : {
		'consumerKey' 		: 'your-consumer-key-here',
		'consumerSecret' 	: 'your-client-secret-here',
		'callbackURL' 		: 'http://localhost:8080/auth/twitter/callback'
	},

	'googleAuth' : {
		'clientID' 		: '222556587003-d48del35gflv95nt9kcg4i982h6glogu.apps.googleusercontent.com',
		'clientSecret' 	: 'Wfl_mD_b0Sh3fNCN-lcWJlvM',
		'callbackURL' 	: 'https://googleoauth1.herokuapp.com/auth/google/callback'
	}

};
