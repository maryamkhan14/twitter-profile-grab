require("dotenv").config();

const express = require("express");
const cors = require("cors");
const searchProfileRoutes = require("./routes/searchProfiles");

// express app
const app = express();

app.use(cors());
app.use(express.json());

// define "/search" route
app.use("/search", searchProfileRoutes);

const PORT = process.env.PORT || 3001;
// turn server on
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
