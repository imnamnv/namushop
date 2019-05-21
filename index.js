const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const homeRouter = require('./routes/home.router');
const adminRouter = require('./routes/admin.router/admin');
const userRouter = require('./routes/user.router/login');
const mongoose = require('mongoose');
const passportSetup = require('./authendication/login-google');
const cookieSession = require('cookie-session');
const keys = require('./authendication/key');
const passport = require('passport');

//set up cookie
app.use(cookieSession({
    maxAge:24 * 60 * 60 * 1000,
    keys:[keys.session.cookieKey] 
}));

//set up passport
app.use(passport.initialize());
app.use(passport.session());

//set body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//set mongoose
mongoose.connect('mongodb://localhost/namu-shop',{ useNewUrlParser: true });

//set static file
app.use(express.static('public'));

//set pug
app.set('view engine', 'pug');
app.set('views','views');

//set router
app.use('/',homeRouter);
app.use('/node-admin',adminRouter);
app.use('/user',userRouter);

app.listen(3000);