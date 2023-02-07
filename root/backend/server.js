// attaches environment variables to process object
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

//const saveProfileRoutes = require("./routes/saveProfiles");
//const searchProfileRoutes = require("./routes/searchProfiles");

// express app
const app = express();

// middleware
// look if there's any body in the request, if so, then transform to json
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next(); // go on to next middleware
});

// find profile routes (but only when a certain path receives a request)
// profileRoutes' routes will concatenate to /users/show
//app.use("/users", saveProfileRoutes);

// routes for searching for a new user
//app.use("/search", searchProfileRoutes);

// connect to DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen to requests after connecting to database
    app.listen(process.env.PORT, () => {
      console.log("connected to db and listening on port ", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
