const express = require("express");
const { searchProfile } = require("../controllers/searchProfileController");
const router = express.Router();

// GET endpoint for parameter username
router.get("/:username", searchProfile);

module.exports = router;
