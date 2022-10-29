const participantsControllers = require("./participants.controllers");

const getAllParticipants = (req, res) => {
  userId = req.user.id;
  participantsControllers
    .getAllParticipant(userId)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const getParticipantById = (req, res) => {
  const id = req.params.id;
  participantsControllers
    .getParticipantById(id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(404).json({ message: err.message });
    });
};

const addParticipant = (req, res) => {
  const userId = req.user.id;
  const conversationId = req.params.id;
  if (userId && conversationId) {
    participantsControllers
      .addParticipant(conversationId, userId)
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((err) => {
        res.status(400).json(err.message);
      });
  } else {
    res.status(400).json({
      message: "missing data",
      fields: {
        userId: "string",
      },
    });
  }
};

module.exports = {
  getAllParticipants,
  getParticipantById,
  addParticipant,
};
