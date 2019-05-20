const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const key = require('./key.js');
const Account = require('../models/account.model');

passport.use(
    new GoogleStrategy({
        callbackURL: '/user/detail',
        clientID: key.google.clientID,
        clientSecret: key.google.clientSecret
    }, (accessToken, refreshToken, profile, done) => {
        //console.log(profile);
        //console.log(profile.photos[0].value)
        Account.findOne({ idGoogle: profile.id }, (err,result) => {
            if (result) {
                console.log(result);
            } else {
                let account = new Account({
                    idGoogle: profile.id,
                    displayName: profile.displayName,
                    photos: profile.photos[0].value,
                    phone: "",
                    address: ""
                });
                account.save().then((data) => {
                });
            }
        })

    }
    ));