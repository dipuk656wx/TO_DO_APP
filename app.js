const express = require('express');
const bodyparser = require('body-parser');
const app = express();
let items = ["Bring food", "Cook food", "Eat food"];
let workitems = []

app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {
   var today = new Date();
   let option = {
     month:"long",
     day:"numeric",
     weekday:"long"
   }
   var dnum = today.toLocaleString("en-us", option);
   res.render("list", {theday:dnum, litems:items});
 });
 app.get("/works", function (req, res) {
   res.render("list", {theday:"works", litems: workitems});
 })

 app.post("/", function (req, res) {
   var item = req.body.Name;

   if(req.body.button==="works"){
     workitems.push(item);
     res.redirect("/works");
   }
   else{
     items.push(item);
     res.redirect("/")
   }

 })

app.listen(3000, function() {
   console.log("Working on port 3000");

 })
