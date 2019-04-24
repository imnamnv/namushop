const express = require('express');
const app = express();
const demoRouter = require('./routes/demo-router');
const adminRouter = require('./routes/admin.router/admin');
const mongoose = require('mongoose');

//set mongoose
mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true});

//set static file
app.use(express.static('imgs'));

//set pug
app.set('view engine', 'pug');
app.set('views','views');

app.get('/',(req,res)=>{
    res.render('index');
})

app.use('/router',demoRouter);
app.use('/node-admin',adminRouter);

app.listen(3000);