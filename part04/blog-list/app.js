const config = require('./utils/config')
const http = require('http')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

mongoose.connect(config.mongoUrl)

const blogsRouter = require("./controllers/blog-list")
app.use("/api/blogs", blogsRouter.blogsRouter)

app.use(cors())
app.use(express.json())

module.exports = app