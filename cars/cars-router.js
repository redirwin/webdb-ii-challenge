const express = require("express");
const knex = require("knex");

const config = require("../knexfile.js");

const db = knex(config.development);

const router = express.Router();

// endpoints

router.get("/", (req, res) => {
  db("cars")
    .then(cars => {
      res.status(200).json(cars);
    })
    .catch(error => {
      res.status(500).json({
        message: "There was an error retrieving cars from the database."
      });
    });
});

module.exports = router;
