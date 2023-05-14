const express = require("express");
const router = express.Router();
const userController = require("../controllers/user-controller");
const passport = require("passport");
require("../configs/passport-local");
router.get("/sign-up", userController.signUp);
router.get("/sign-in", userController.signIn);
router.post("/create", userController.create);
router.post(
  "/create-session",
  passport.authenticate("local", { failureRedirect: "/users/sign-in" }),
  userController.createSession
);
router.get("/sign-out", userController.signOut);
router.get("/profile", passport.checkAuthentication, userController.profile);
module.exports = router;
