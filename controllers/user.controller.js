module.exports.login = (req, res) => {
    if(req.user){
        res.redirect('/user');
    }else{
        res.render('../views/user/login.pug');
    }
}
module.exports.detail = (req, res) => {
    res.render('../views/user/detail.pug', {
        user: req.user
    });
}