const Messages = require("./models.js");

module.exports = {
    // getall
    allMessages: (req,res)=>Messages.find({})
                                    .then(data=>res.json(data))
                                    .catch(errs=>res.json(errs)),
    // new 
    makeMSG: (req,res)=>Messages.create(req.body)
                                .then(data=>console.log('yo')||res.json(data))
                                .catch(errs=>console.log('hey')||res.json(errs)),
    // new comet
    makeCMT: (req,res)=>Messages.findById(req.body.id)
                                .then(message=>{
                                    message.comments.push({
                                        name: req.body.name,
                                        comment: req.body.comment
                                    });
                                    return message.save()
                                })
                                .then(updatedMSG=>res.json(updatedMSG))
                                .catch(errs=>res.json(errs))
}