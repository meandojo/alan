const Tasks = require("./model.js");

module.exports = {
    create:     (req,res)=> Tasks.create(req.body).then(data=>res.json(data)).catch(errs=>res.json(errs)),
    readOne:    (req,res)=> Tasks.findById(req.params.id).then(data=>res.json(data)).catch(errs=>res.json(errs)),    
    readAll:    (req,res)=> Tasks.find({}).then(data => res.json(data)).catch(errs=>res.json(errs)),
    delete:     (req,res)=> Tasks.findByIdAndRemove(req.params.id).then(data=>res.json(data)).catch(errs=>res.json(errs)),
    update:     (req,res)=> Tasks.findByIdAndUpdate(req.params.id, req.body).then(data=>res.json(data)).catch(errs=>res.json(errs))
}