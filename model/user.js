const mongoose = require('mongoose')


const schemaUser = new mongoose.Schema({
    userName: {
        Type: String,
        unique: true,
        require: true,
        minlength: 2,
        maxlength: 20,
    },
    userPassWord: {
        Type: String,
        unique: true,
        require: true,
        minlength: 2,
        maxlength: 20,
    },
    userAddress: {
        Type: String,
        minlength: 2,
        maxlength: 20,


    },
    userMail: {
        Type: String,
        minlength: 2,
        maxlength: 20,
        unique: true,

    },
    date: {
        type: Date,
        default: Date.now,
        lastActiveAt: Date
    },

})

const userModel = mongoose.model('User', schemaUser)

module.exports = userModel