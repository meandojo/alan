const api = require("./controller.js");
const bp = require("body-parser");

module.exports = function(app)
{
    app.use(bp.json());
    // allmsgs
    app.get("/messages", api.allMessages);
    // new msg
    app.post("/messages", api.makeMSG);
    // new cmt
    app.post("/comments", api.makeCMT);
    return app;
}