import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());


app.get('/health',(req,res)=>{
    res.send(`<h1>Server Jinda hai...🤣🤣</h1>`)
})

app.get('/learn',(req,res)=>{
    res.send(`<h1>I am learning about CI-CD pipeline...!</h1>`)
})

app.get('/create',(req,res)=>{
    res.send(`<h1>I complete today ci-cd hosting..!</h1>`)
})

app.get('/kill',(req,res)=>{
    res.send(`<h1>I kill nitish..😱</h1>`)
})

const PORT = 5000;

app.listen(PORT , ()=>{
    console.log(`server is start on port ${PORT}`)
})