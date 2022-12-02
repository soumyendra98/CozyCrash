require("rootpath")();
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("_helpers/jwt");
const errorHandler = require("_helpers/error-handler");

// Database connection
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/Udhbhava", { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to MongoDB");
  });

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

// use JWT auth to secure the api
app.use(jwt());

// Routes
const AdminPanelRouter = require("./routes/Admin/Panel");
const MangeRouter = require("./routes/Admin/Manage");
const LoginRouter = require("./routes/Login/Login");
const UserPanelRouter = require("./routes/User/Panel");

app.use(LoginRouter);
app.use(AdminPanelRouter);
app.use(MangeRouter);
app.use(UserPanelRouter);

// Server
app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/express_backend", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});

// global error handler
app.use(errorHandler);
