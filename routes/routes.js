const Router = require("express").Router();

// Homepage
Router.get("/",)

// WA EndPoints

Router.post("/session",(req,res)=>{
    const body = req.body;

    const text = body.message;
    const userId = body.from;

    const answer = handleMessage(userId, text);

    res.send(answer);
})

// Location Endpoints

Router.get("/location")
