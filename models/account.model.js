const mongo = require('mongoose')

var account = new mongo.Schema({
    idGoogle:String,
    displayName: String,
    photos:String,
    phone:String,
    address:String

});
var Account = mongo.model('Account',account,'accounts')
module.exports = Account