const express = require("express");
const knex = require("knex");

const config = require("../knexfile.js");

const db = knex(config.development);

const router = express.Router();

// endpoints

module.exports = router;
