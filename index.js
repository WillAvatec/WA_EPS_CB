const express = require("express");

const app = express();
const WEBHOOK_TOKEN = process.env.WEBHOOK_TOKEN;
const PORT = process.env.PORT;

// MiddleWare
app.use(express.json());
// Connect router

app.get('/test', (req, res) => {
  const { 'hub.mode': mode, 'hub.challenge': challenge, 'hub.verify_token': token } = req.query;

  console.log("query",req.query)
  console.log("body",req.body)
  console.log("params",req.params)
  console.log("header",req.headers)

  if (mode === 'subscribe' && token === verifyToken) {
    console.log('WEBHOOK VERIFIED');
    res.status(200).send(challenge);
  } else {
    res.status(403).end();
  }
});

// Start server
app.listen(PORT,()=>{
    console.log("Server started listening on port " + PORT);
});