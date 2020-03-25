const mongoose = require('mongoose');
const Schema = require("mongoose").Schema;


const schemaUser = new Schema({

    isAdmin: {
        type: Boolean,
        default: false
    },
    email: {
        type: String,
        minlength: 2,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        minlength: 2
    },
    lastName: {
        type: String,
        minlength: 2
    },
    address: {
        type: String,
        minlength: 2
    },
    resetToken: String,
    expirationToken: Date,
    wishlist: [{
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product" //det som exporteras i product-model 
        },
        album: {
            type: mongoose.Schema.Types.String,
            ref: "Product"
        },
        artist: {
            type: mongoose.Schema.Types.String,
            ref: "Product"
        }
    }]
})

schemaUser.methods.addToWishlist = function (product) {
    this.wishlist.push({
        productId: product._id,
        artist: product.artist,
        album: product.album
    })
    //hämtar sitt id från mongoose


    const filter = this.wishlist.filter(function ({
        productId
    }) {
        console.log({
            productId
        })

        return !this.has(`${productId}`) && this.add(`${productId}`)

    }, new Set)

    console.log(filter)

    this.wishlist = [...filter]

    return this.save();
}
const userModel = mongoose.model('User', schemaUser)
module.exports = userModel