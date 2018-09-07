const xp = require("express");
const path = require("path");
const bp = require("body-parser");
const router = require("./server/routes.js");

const app = xp();
app.set("views",path.join(__dirname, "/views"));
app.set("view engine", "ejs");
app.use(bp.urlencoded({extended: true}));

router(app);

app.listen(8000, (errs)=>console.log(errs?errs:"gucci"));