// routes/users.js
const express = require('express');
const app = express();

const member = require('./member');
const seller = require('./seller');
const admin = require('./admin');

app.use('/member',member);
app.use('/seller',seller);
app.use('/admin',admin);

module.exports = app
