const express = require("express");

const app = express();
const PORT = 8000;

// MiddleWare
app.use(express.json());

// Connect router

app.get("/test",(req,res)=>{
    console.log(req.body)
})

// Start server
app.listen(PORT,()=>{
    console.log("Server started listening on port " + PORT);
});