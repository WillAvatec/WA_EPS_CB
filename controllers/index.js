
/** @type {import("express").RequestHandler} */

// Confirm
exports.session_get = (req, res) => {
  const { 'hub.mode': mode, 'hub.challenge': challenge, 'hub.verify_token': token } = req.query;

  if (mode === 'subscribe' && token === process.env.WEBHOOK_TOKEN) {
      console.log('WEBHOOK VERIFIED');
      res.status(200).send(challenge);
  } else {
      res.status(403).end();
  }
};

exports.session_post = (req,res) => {
  const {entry} = req.body;

  if(!entry || entry.length === 0){
    return res.status(400).send("Invalid request: Wrong data - step 1");
  }

  const {changes} = entry[0];

  if(!changes || changes.length === 0){
    return res.status(400).send("Invalid Request: Wrong data - step 2")
  }


  // Check if response is a user message or a status update
  const statuses = changes[0].value.statuses ? changes[0].value.statuses[0] : null
  const messages = changes[0].value.messages ? changes[0].value.messages[0] : null

  if (statuses) {
    // Handle message status
    console.log(`
      MESSAGE STATUS UPDATE:
      ID: ${statuses.id},
      STATUS: ${statuses.status}
    `)
  }

  if (messages) {
    // Handle received messages
    if (messages.type === 'text') {
      if (messages.text.body.toLowerCase() === 'hola') {
        replyMessage(messages.from, 'Hola. Como estas?', messages.id)
      }

      if (messages.text.body.toLowerCase() === 'lista') {
        sendList(messages.from)
      }

      if (messages.text.body.toLowerCase() === 'botones') {
        sendReplyButtons(messages.from)
      }
    }

    if (messages.type === 'interactive') {
      if (messages.interactive.type === 'list_reply') {
        sendMessage(messages.from, `Escogiste la opcion: - Titulo ${messages.interactive.list_reply.title}`)
      }

      if (messages.interactive.type === 'button_reply') {
        sendMessage(messages.from, `Seleccionaste el boton: - Titulo ${messages.interactive.button_reply.title}`)
      }
    }
    
    console.log(JSON.stringify(messages, null, 2))
  }

}