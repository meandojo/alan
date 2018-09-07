const goose = require("mongoose");


goose.connect("mongodb://localhost:27017/cats_and_stuff",{useNewUrlParser: true} ,(errs)=>console.log(errs?errs:"db gucci"));

const CatSchema = new goose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [2,"yo give a larger name"]
    }
},{timestamps:true});

const Cats = goose.model('cats', CatSchema);

module.exports = Cats;