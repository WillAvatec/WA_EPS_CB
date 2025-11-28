const express = require("express");
const router = require("./routes/routes.js");

const app = express();

// MiddleWare
app.use(express.json());

// Connect router
app.use(router);

// Start server
app.listen(process.env.PORT,()=>{
    console.log("Server started listening on port " + process.env.PORT);
});