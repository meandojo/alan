const {home, cats, cattify} = require("./controller.js")

function router(app)
{
    app.get("/", home);    
    app.get("/cats", cats);    
    app.post("/cats", cattify);
    // app.patch("/cats/:id", updateCat)
}

module.exports = router;