// attaches environment variables to process object
require("dotenv").config();

const express = require("express");
const cors = require("cors");
// const saveProfileRoutes = require("./routes/saveProfiles");
const searchProfileRoutes = require("./routes/searchProfiles");

// express app
const app = express();

// middleware
// look if there's any body in the request, if so, then transform to json
app.use(cors());
app.use(express.json());

// find profile routes (but only when a certain path receives a request)
// profileRoutes' routes will concatenate to /users/show
// app.use("/users", saveProfileRoutes);

// routes for searching for a new user
app.use("/search", searchProfileRoutes);

const PORT = process.env.PORT || 3001;
// connect to DB
app.listen(PORT, () => {
  console.log(`connected to db and listening on port ${PORT}`);
});
