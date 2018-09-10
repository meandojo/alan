const mongoose = require("mongoose");
const CommentSchema = require("./Comment.js")

const MessageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2
    },
    message: {
        type: String,
        required: true,
        minlength: 2
    },
    comments: [CommentSchema]
},{timestamps: true});

mongoose.connect("mongodb://localhost:27017/msgbrd_v2", {useNewUrlParser: true}, (errs)=>console.log(errs?errs:"db guuci"));;

module.exports = mongoose.model("Message", MessageSchema)