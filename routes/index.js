const express = require("express");
const router = express.Router();
const indexController = require("../controllers/index-controller");
const userRoutes = require("./user");
const postRoutes = require("./post");
const commentRoutes = require("./comment");
const passport = require("passport");
const passport_local = require("../configs/passport-local");
router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/comments", commentRoutes);
router.get("/", indexController.home);
module.exports = router;
