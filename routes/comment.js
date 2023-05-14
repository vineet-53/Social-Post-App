const express = require("express");
const router = express.Router();
const commnetController = require("../controllers/comment-controller");

router.post("/create/:postId", commnetController.create);
router.get('/delete/:commentId', commnetController.delete)
module.exports = router;
