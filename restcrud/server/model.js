const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/rtapi7",{useNewUrlParser: true},(errs)=>console.log(errs?errs:"db goodness!"));

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        minlength: [2,"need mor title"]
    },
    description: {
        type: String,
        minlength: [2,"need more descriptor"]
    },
    completed: {
        type: Boolean,
        default: false
    }
},{timestamps: true});

module.exports = mongoose.model("Task", TaskSchema)