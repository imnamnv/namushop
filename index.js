const express = require('express');
const app = express();
const demoRouter = require('./routes/demo-router');

//set pug
app.set('view engine', 'pug');
app.set('views','views');

app.get('/',(req,res)=>{
    res.render('index');
})

app.use('/router',demoRouter);
app.listen(3000);