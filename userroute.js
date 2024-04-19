const express = require('express');
const { registerUser } = require('./usercontrol');

const router = express.Router();

router.route("/api/v1/register").post(registerUser)

module.exports = router