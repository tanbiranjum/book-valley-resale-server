const mongoose = require('mongoose')

const WishlistSchema = new mongoose.Schema({
    bookId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Book',
        required: [true, 'Please provide a book']
    },
    buyer: {
        type: String,
        required: [true, 'Please provide a buyer']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Wishlist = mongoose.model('Wishlist', WishlistSchema)
module.exports = Wishlist