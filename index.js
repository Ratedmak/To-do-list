import express from "express";
import bodyParser from "body-parser";
var list_1=[];
var list_2=[];
var date=new Date();

const app=express(); 
const port=3000;
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

function checks(req,res,next){
    if(date.getTime()==("00:00")){
    list_1.splice(0,list_1.length);
    list_2.splice(0,list_2.length);}
    
    next();
}
app.use(checks);
app.get("/",(req,res)=>{
    res.render("index.ejs",{list_1});
  
});
app.get("/work",(req,res)=>{
      res.render("index.ejs",{work:"work",list_2});
});

app.post("/",(req,res)=>{
    
    list_1.push((req.body["newitem2"]));
    res.render("index.ejs",{list_1} )
    
});
app.post("/work",(req,res)=>{
    
    list_2.push((req.body["newitem1"]));
    res.render("index.ejs",{work:"work",list_2});

});

app.listen(3000,(req,res)=>{
    console.log(`listening in port ${port}`);
});

