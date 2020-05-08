const express = require("express");
const router = express.Router();
const animals = require("../database/animals");

router.get("/", animals.getAnimals);

// When adding an animal, should delete the oldest animal
// IF there are already 5 records
router.post("/", animals.updateAnimal);

router.put("/:id", animals.addAnimal); // Not needed
router.delete("/:id", animals.deleteAnimal); // Not needed

module.exports = router;
