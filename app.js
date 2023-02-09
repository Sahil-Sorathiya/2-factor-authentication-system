const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.set("view engine", "ejs");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  return res.render("index");
});

app.get("/register", (req, res) => {
  return res.render("register");
});

app.get("/login", (req, res) => {
  return res.render("login");
});

app.get("/policy", (req, res)=>{
    return res.render("policy");
})

app.get("/forgotpassword", (req, res)=>{
    return res.render("forgotpass");
})

app.get("/otp", (req, res)=>{
  return res.render('otp')
})

app.get("/setnewpassword", (req, res)=>{
  return res.render('setnewpass')
})

app.get("/changepassword", (req, res)=>{
  return res.render('setnewpass')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
