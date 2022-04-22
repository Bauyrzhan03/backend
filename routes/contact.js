const express = require("express");
const router = express.Router();
router
    .route("/contact")
    .get((req, res) => res.render("./contact"))
    .post((req, res) => res.send("POST CONTACT"));
module.exports = router;

