const mongoose = require('mongoose');
const Product = require('./product.model'); // Import the Product model
const User = require('./user.model'); // Import the User model

const ReviewSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true,
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product', 
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    comment: {
        type: String,
        required: true,
    },
}, {timestamps: true});

const Review = mongoose.model('Review', ReviewSchema);

module.exports = Review;
