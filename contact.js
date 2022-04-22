const express = require("express");
const router = express.Router();
router
    .route("/contact")
    .get((req, res) => res.send("GET CONTACT"))
    .post((req, res) => res.send("POST CONTACT"));
module.exports = router;
