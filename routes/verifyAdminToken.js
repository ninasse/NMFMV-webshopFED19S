const jwt = require('jsonwebtoken');
const config = require('../config/config');
const constant = require('../constant');

module.exports = (req, res, next) => {


    const token = req.cookies.jsonwebtoken
    console.log(token, "token")
    if (token) {

        const userInfo = jwt.verify(token, 'secretPriveteKey')
        console.log("user info", userInfo)
        req.userInfo = userInfo;

        if (userInfo.userInfo.isAdmin == true) {
            next()
        }

        else {
            res.redirect(constant.ROUTE.index);
        }

    } else {
        res.render('errors', {
            errmsg: 'Du är inte inloggad!',
            token: (req.cookies.jsonwebtoken !== undefined) ? true : false
        });
    }

}