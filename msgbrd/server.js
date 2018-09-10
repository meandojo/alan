const express = require("express");
const transmogrify = require("./server/routes.js");

const app = transmogrify(express());

app.listen(8000, (errs)=>console.log(errs?errs:"gucci"));