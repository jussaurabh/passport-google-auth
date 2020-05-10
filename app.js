const express = require("express");
const authRoute = require("./routes/auth-routes");
const profileRoute = require("./routes/profile-routes");
const keys = require("./config/keys");
const cookieSession = require("cookie-session");
const passport = require("passport");
const passportSetup = require("./config/passport-setup");

const app = express();

app.set("view engine", "ejs");

app.use(
	cookieSession({
		maxAge: 24 * 60 * 60 * 100,
		keys: [ keys.session.cookieKey ]
	})
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoute);
app.use("/profile", profileRoute);

app.get("/", (req, res) => res.render("home"));

app.listen(3100, () => console.log("app now running on port 3100"));
