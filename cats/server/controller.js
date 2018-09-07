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
        res.render("cats", {data: data})
        
    })
}

function makeCat(req,res){
    Cats.create(req.body, (errs, results)=>{
        if(errs){
            console.log("you gooft!");
            console.log(errs);
        }else{
            console.log(results);
        }
        res.redirect("/cats")
    })

}

// let edit = (req,res)=>Cats.findByIdAndUpdate(req.params.id, req.body);