const express = require("express");
const router = express.Router();
const animals = require("../database/animals");

router.get("/", (req, res, next) => {
  res.send("GET /animals");
  animals.getAnimals();
});

router.post("/", (req, res, next) => {
  res.send("POST /animals");
  animals.addAnimal();
});

router.put("/:id", (req, res, next) => {
  res.send("PUT /animals/:id");
  animals.updateAnimal();
});

router.delete("/:id", (req, res, next) => {
  res.send("DELETE /animals/:id");
  animals.deleteAnimal();
});

module.exports = router;
