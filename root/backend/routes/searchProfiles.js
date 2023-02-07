const express = require("express");
const { searchProfile } = require("../controllers/searchProfileController");
// sets a router up
const router = express.Router();

// GET a user from Twitter API
router.get("/:username", searchProfile);

module.exports = router;
