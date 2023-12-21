const config = require("./utils/config");
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

mongoose.connect(config.mongoUrl);

app.use(cors());
app.use(express.json());

const usersRouter = require("./controllers/users");
const blogsRouter = require("./controllers/blog-list");
const loginRouter = require("./controllers/login");

app.use("/api/users", usersRouter);
app.use("/api/blogs", blogsRouter);
app.use("/api/login", loginRouter);

module.exports = app;
