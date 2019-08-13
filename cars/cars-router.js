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

router.post("/", (req, res) => {
  const car = req.body;
  if (!car.vin || !car.make || !car.model || !car.mileage) {
    res.status(400).json({
      message: "Please include vin, make, model, and mileage."
    });
  } else {
    db("cars")
      .insert(car)
      .then(car => {
        res.status(200).json(car);
      })
      .catch(error => {
        res.status(500).json({
          message: "There was an error saving to the database."
        });
      });
  }
});

module.exports = router;
