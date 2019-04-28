const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const homeRouter = require('./routes/home.router');
const adminRouter = require('./routes/admin.router/admin');
const mongoose = require('mongoose');

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

app.listen(3000);