const express = require("express");
const passport = require("passport");
const passport_local = require("../configs/passport-local");
const router = express.Router();
const postController = require("../controllers/post-controller");
router.get("/show", passport.checkAuthentication, postController.show);
router.post("/create", postController.create);
router.get("/delete/:postId", postController.delete);
module.exports = router;
