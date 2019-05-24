const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const key = require('./key.js');
const Account = require('../models/account.model');

passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser((id, done) => {
    Account.findById(id).then((user) => {
        done(null, user);
    })
});

passport.use(
    new GoogleStrategy({
        callbackURL: '/user/detail',
        clientID: key.google.clientID,
        clientSecret: key.google.clientSecret
    }, (accessToken, refreshToken, profile, done) => {
        //find account in database
        Account.findOne({ idGoogle: profile.id }, (err, result) => {
            //if account have
            if (result) {
                //console.log(result);
                done(null, result);
            } 
            //if account haven't
            else {
                let account = new Account({
                    idGoogle: profile.id,
                    displayName: profile.displayName,
                    photos: profile.photos[0].value,
                    phone: "",
                    address: ""
                });
                account.save().then((data) => {
                    done(null, data)
                });

            }
        })

    }
    ));