const mongoose = require("mongoose");

module.exports = new mongoose.Schema({
    name: {
        type: String,
        minlength: 2
    },
    comment: {
        type: String,
        minlength: 2
    }
},{timestamps: true});