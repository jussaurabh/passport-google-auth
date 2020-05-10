const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require("./keys");

passport.serializeUser((user, done) => {
	console.log("SERIALIZEDUSER - ", user);
	done(null, user);
});

passport.deserializeUser((user, done) => {
	console.log("DESERIALIZEDUSER - ", user);
	done(null, user);
});

passport.use(
	new GoogleStrategy(
		{
			// options for google strategy
			callbackURL: "/auth/google/redirect",
			clientID: keys.google.clientID,
			clientSecret: keys.google.clientSecret
		},
		(accessToken, refreshRoken, profile, done) => {
			// passport callback function
			console.log("opassport cb func. fired");
			console.log(profile);
			done(null, profile);
		}
	)
);
