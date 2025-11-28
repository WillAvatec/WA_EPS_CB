const { session_get,session_post } = require("../controllers");
const Router = require("express").Router();

// Homepage
Router.get("/",(req,res)=> {
    res.send("El Punto del Sabor")
})

// WA EndPoints

Router.get("/session",session_get);
Router.post("/session",session_post);

// Location Endpoints

// TODO
Router.get("/location",(req,res)=> {
    res.send("Location")
})
