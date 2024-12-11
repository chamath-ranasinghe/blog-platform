const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());


const blogs = [{
    id: 1,
    title: "Hello World",
    author: "Chamath",
    content: "Hello World"
},{
    id: 2,
    title: "Hello World",
    author: "Chamath",
    content: "Hello World"
}]

const PORT = 8080;

app.get("/blogs",(req,res)=>{
    res.send(blogs);
})

app.listen(PORT,()=>{
    console.log(`Server Running in Port ${PORT}`);
})