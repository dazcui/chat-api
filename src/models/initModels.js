const Users = require("./users.models");
const Messages = require("./message.models");
const Conversations = require("./conversations.models");

const initModels = () => {
  //Una conversacion puede ser creada por un usuario
  Conversations.belongsTo(Users);
  //Un usuario puede crear una o muchas conversaciones
  Users.hasMany(Conversations);


};

module.exports = initModels;
