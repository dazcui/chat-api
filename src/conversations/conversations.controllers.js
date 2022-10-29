const Conversations = require("../models/conversations.models");
const Users = require("../models/users.models");

// const getAllConversation = async () => {
//   const data = await Conversations.findAll({
//     include: [
//       {
//         model: Users,
//         as: "user",
//       },
//     ],
//   });
//   return data;
// };

const getAllConversationsByUser = async (userId) => {
  const data = await Conversations.findAll({
    where: {
      userId,
    },
  });
  return data;
};

const getConversationById = async (userId, id) => {
  const data = await Conversations.findOne({
    where: {
      userId,
      id,
    },
  });
  return data;
};

const getConversationByName = async (title, userId) => {
  const data = await Conversations.findAll({
    where: {
      title,
      userId,
    },
  });
  return data;
};

const createConversation = async (data) => {
  const response = await Conversations.create({
    title: data.title,
    imageUrl: data.imageUrl,
    userId: data.userId,
  });
  return response;
};

const updateConversation = async (userId, id, title) => {
  const result = await Conversations.update(title, {
    where: {
      userId,
      id,
    },
  });
  return result;
};

const deleteConversationByName = async (userId, title) => {
  const data = await Conversations.destroy({
    where: {
      userId,
      title,
    },
  });
  return data;
};

const deleteConversationById = async (userId, id) => {
  const data = await Conversations.destroy({
    where: {
      userId,
      id,
    },
  });
  return data;
};

module.exports = {
  getConversationByName,
  createConversation,
  deleteConversationById,
  deleteConversationByName,
  updateConversation,
  getConversationById,
  getAllConversationsByUser,
};
