const bp = require("body-parser");
const api = require("./api.js");

module.exports = function(app)
{
    app.use(bp.json());
    app.get("/api/tasks", api.readAll);
    app.get("/api/tasks/:id", api.readOne);
    app.post("/api/tasks", api.create);
    app.put("/api/tasks/:id", api.update);
    app.delete("/api/tasks/:id",api.delete);
}