const UUID = require("uuid");
const Participants = require("../models/participants.models");
const Users = require("../models/users.models");

const getAllParticipant = async (userId) => {
  const data = await Participants.findAll({
    where: {
      userId,
    },
  });
  return data;
};

const getParticipantById = async (id) => {
  const data = await Participants.findOne({
    where: {
      id,
    },
  });
  return data;
};

const addParticipant = async (conversationId, userId) => {
  const response = await Participants.create({
    id: UUID.v4(),
    conversationId: conversationId,
    userId: userId,
  });
  return response;
};

module.exports = {
  getAllParticipant,
  getParticipantById,
  addParticipant,
};
