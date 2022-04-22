const express = require("express");
const router = express.Router();
router
    .route("/index")
    .get((req, res) => res.send("/index.ejs"))
    .post((req, res) => res.send("POST"));
module.exports = router;