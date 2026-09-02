const express = require('express');
require('dotenv').config()
const connectDB = require('./db/db.js');
const app = express();
const cookieParser = require("cookie-parser");
const authRoutes = require('./routes/auth.routes.js');
const postRoutes = require('./routes/post.routes.js');

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth/', authRoutes)
app.use('/api/posts', postRoutes)

connectDB();

module.exports = app;