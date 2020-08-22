const express = require('express');
const bodyParser = require('body-parser')
const ejs = require('ejs')

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');

const titles = ['Home'];
const items = ['  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam odit quod accusantium temporibus, explicabo sed beatae vero eius maiores sequi. Deleniti sit porro vero ipsa ad voluptatem cupiditate, dolore aspernatur.'];
//Home route
app.get("/",(req,res)=>{

    res.render("home",{titles:titles,items:items});
})


//Hidden compose route
app.get("/compose",(req,res)=>{

    res.render("compose");
})

app.post("/compose",(req,res)=>{
    titles.push(req.body.title);
    items.push(req.body.blogPost);
    res.redirect("/");  
})

//About-us route
app.get("/about-us",(req,res)=>{
    res.render("about-us.ejs")
})


//contact-us route
app.get("/contact-us",(req,res)=>{
    res.render("contact-us.ejs")
})

//For each blog post pages
app.get("/posts/:id",function(req,res){
  let current = req.params.id
  let i = titles.indexOf(current)
  res.render("post",{title:current, item:items[i]})
})
app.listen(3000,()=>{
    console.log("Server listening at port 3000")
})