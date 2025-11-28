const axios = require("axios");

async function sendMessage(to,body) {
    await axios(
        "https://graph.facebook.com/v22.0/919988784524144/messages",
        {
            method:"post",
            headers:{
                "Authorization":`Bearer ${process.env.ACCESS_TOKEN}`,
                "Content-Type":"Content-Type: application/json"
            },
            data:JSON.stringify({
                "messaging_product":"whatsapp",
                language:{
                    code:"es_PE"
                },
                type:"text",
                text:{
                    body
                },
                to
            })
        }
    )
}

async function replyMessage(to, body, messageId) {
    await axios(
        'https://graph.facebook.com/v21.0/919988784524144/messages',
        {
            method: 'post',
            headers: {
                'Authorization': `Bearer ${process.env.ACCESS_TOKEN}`,
                'Content-Type': 'application/json'
            },
            data: JSON.stringify({
                messaging_product: 'whatsapp',
                to,
                type: 'text',
                text: {
                    body
                },
                context: {
                    message_id: messageId
                }
            })
    })
}

async function sendList(to) {
  await axios({
    url: 'https://graph.facebook.com/v21.0/919988784524144/messages',
    method: 'post',
    headers: {
      'Authorization': `Bearer ${process.env.ACCESS_TOKEN}`,
      'Content-Type': 'application/json'
    },
    data: JSON.stringify({
      messaging_product: 'whatsapp',
      to,
      type: 'interactive',
      interactive: {
        type: 'list',
        header: {
          type: 'text',
          text: 'Este es el Header'
        },
        body: {
          text: 'Esta es una lista interactiva'
        },
        footer: {
          text: 'Este es el footer'
        },
        action: {
          button: 'Presiona para ver los botones',
          sections: [
            {
              title: 'Plato Principal',
              rows: [
                {
                  id: 'first_option',
                  title: 'Seco con frejoles',
                  description: 'Carne de caballo con un toque de loche'
                },
                {
                  id: 'second_option',
                  title: 'Aji de gallina',
                  description: 'Gallina aderezada con aji amarillo, pero es pollo en realidada'
                }
              ]
            },
            {
              title: 'Entradas',
              rows: [
                {
                  id: 'third_option',
                  title: 'Huancaina'
                }
              ]
            }
          ]
        }
      }
    })
  })
}

async function sendReplyButtons(to) {
}

module.exports= { replyMessage, sendList, sendMessage, sendReplyButtons };

