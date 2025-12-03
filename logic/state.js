const sessions = {}; // { userId: { stage, category, item, quantity, payment } }

function getSession(userId) {
  if (!sessions[userId]) {
    sessions[userId] = {
      stage: "menu",
      payment: "",
      order: {
        main:"",
        starter:""
      }
    };
  }
  return sessions[userId];
}

module.exports = { getSession };

// ESTE CODIGO NO ASEGURA TENER DATA PERSISTENCE, se requiere tener una base de datos temporal posiblemente