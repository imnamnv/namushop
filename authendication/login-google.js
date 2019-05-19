const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const key = require('./key.js');

passport.use(
    new GoogleStrategy({
        callbackURL: '/',
        clientID: key.google.clientID,
        clientSecret: key.google.clientSecret
    }, () => {

    }
    ));