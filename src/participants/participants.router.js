const router = require("express").Router();
const passport = require("passport");

const participantsServices = require("./participants.services");
require("../middlewares/auth.middleware")(passport);

router
  .route("/")
  .get(
    passport.authenticate("jwt", { session: false }),
    participantsServices.getAllParticipants
  );

module.exports = router;
