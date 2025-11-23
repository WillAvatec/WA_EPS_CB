const express = require("express");
const router = require("./routes/routes.js");

const app = express();
const PORT = 8000;

// MiddleWare
app.use(express.json());

// Connect router
app.use(router);

// Start server
app.listen(PORT,()=>{
    console.log("Server started listening on port " + PORT);
});