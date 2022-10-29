const { addParticipant } = require("../participants/participants.controllers");
const conversationControllers = require("./conversations.controllers");

const getMyConversations = (req, res) => {
  const id = req.user.id;
  conversationControllers
    .getConversationById(id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const getConversationByName = (req, res) => {
  const title = req.params.title;
  const userId = req.user.id;
  conversationControllers
    .getConversationByName(title, userId)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(404).json({ message: err.message });
    });
};

const getConversationById = (req, res) => {
  const id = req.params.id;
  const userId = req.user.id;

  conversationControllers
    .getConversationById(userId, id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(404).json({ message: err.message });
    });
};

const createConversation = (req, res) => {
  const userId = req.user.id;

  const { title, imageUrl, participantId } = req.body;
  if (title && participantId) {
    conversationControllers
      .createConversation({ title, imageUrl, userId })
      .then((data) => {
        addParticipant(data.id, userId);
        addParticipant(data.id, participantId);
        res.status(201).json(data);
      })
      .catch((err) => {
        res.status(400).json(err.message);
      });
  } else {
    res.status(400).json({
      message: "missing data",
      fields: {
        title: "string",
      },
      optional: {
        imageUrl: "string",
      },
    });
  }
};

const patchConversation = (req, res) => {
  const id = req.params.id;
  const userId = req.user.id;
  const title = req.body;
  conversationControllers
    .updateConversation(userId, id, title)
    .then((data) => {
      if (data[0]) {
        res.status(200).json({ message: `Edited succefully` });
      } else {
        res.status(404).json({ message: "Invalid ID" });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const deleteConversationByName = (req, res) => {
  const title = req.params.title;
  const userId = req.user.id;
  conversationControllers
    .deleteConversationByName(userId, title)
    .then((data) => {
      if (data) {
        res.status(204).json();
      } else {
        res.status(404).json({ message: "Invalid Name" });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const deleteConversationById = (req, res) => {
  const id = req.params.id;
  const userId = req.user.id;
  conversationControllers
    .deleteConversationById(userId, id)
    .then((data) => {
      if (data) {
        res.status(204).json();
      } else {
        res.status(404).json({ message: "Invalid ID" });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const getConversationByUser = (req, res) => {
  const userId = req.user.id;
  conversationControllers
    .getAllConversationsByUser(userId)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

module.exports = {
  getConversationByName,
  createConversation,
  patchConversation,
  deleteConversationById,
  deleteConversationByName,
  getMyConversations,
  getConversationByUser,
  getConversationById,
};
