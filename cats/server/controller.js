module.exports = {
    home: home,
    cats: allCats,
    cattify: makeCat,
}

const Cats = require("./model.js");

function home(req,res){
    console.log("hit root route");
    res.render("index");
}

function allCats(req,res){
    console.log("hit cats route");
    Cats.find({}, function(errs, data){
        if(errs){
            console.log(errs)
        }
        res.json(data)
        
    })
}

function makeCat(req,res){
    console.log("made it here!");
    console.log(req.body);
    Cats.create(req.body)
        .then(data=>res.json({status: "good", data: data}))
        .catch(errs=>res.json({status: "bad", data: errs}))

}

// let edit = (req,res)=>Cats.findByIdAndUpdate(req.params.id, req.body);