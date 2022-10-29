const router = require("express").Router();
const passport = require("passport");
const conversationServices = require("./conversations.services");
const menssageServices = require('../messages/messages.services')
const participantsServices= require('../participants/participants.services')

router
  .route("/")
  .get(
    passport.authenticate("jwt", { session: false }),
    conversationServices.getConversationByUser
  )
  .post(
    passport.authenticate("jwt", { session: false }),
    conversationServices.createConversation
  );

router
  .route("/:id")
  .get(
    passport.authenticate("jwt", { session: false }),
    conversationServices.getConversationById
  )
  .patch(
    passport.authenticate("jwt", { session: false }),
    conversationServices.patchConversation
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    conversationServices.deleteConversationById
  );

  
router
  .route("/:id/message")
  .get(
    passport.authenticate("jwt", { session: false }),
    menssageServices.getAllMessages
  )
  .post(
    passport.authenticate("jwt", { session: false }),
    menssageServices.createMessage
  )
router
  .route("/:id/participant")
  .get(
    passport.authenticate("jwt", { session: false }),
    participantsServices.getAllParticipants
  )
  .post(
    passport.authenticate("jwt", { session: false }),
    participantsServices.addParticipant
  )
  

router
  .route("/-/:title")
  .get(
    passport.authenticate("jwt", { session: false }),
    conversationServices.getConversationByName
  )
  .patch(
    passport.authenticate("jwt", { session: false }),
    conversationServices.patchConversation
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    conversationServices.deleteConversationByName
  );

module.exports = router;
