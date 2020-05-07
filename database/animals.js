const pool = require("./pool");

const printTime = async (req, res) => {
  await pool.query("SELECT NOW() AS 'theTime'", (err, payload) => {
    res.send(payload);
  });
};

const getAnimals = async (request, response) => {
  await pool.query("SELECT * FROM animalsettings", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const updateAnimal = async (request, response) => {
  const { name, type } = request.body;
  await pool.query(
    "DELETE FROM animalsettings WHERE id IN (SELECT id FROM animalsettings ORDER BY id LIMIT 1)",
    (error, results) => {
      if (error) {
        throw error;
      }
    }
  );
  await pool.query(
    "INSERT INTO animalsettings (name, type) VALUES ($1, $2)",
    [name, type],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(results);
    }
  );
};

const addAnimal = async (request, response) => {
  const { name, type } = request.body;
  await pool.query(
    "INSERT INTO animalsettings (name, type) VALUES ($1, $2)",
    [name, type],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(results);
    }
  );
};

const deleteAnimal = async (request, response) => {
  await pool.query(
    "DELETE FROM animalsettings WHERE id IN (SELECT id FROM animalsettings ORDER BY id LIMIT 1)",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(results);
    }
  );
};

module.exports = {
  printTime,
  getAnimals,
  updateAnimal,
  addAnimal,
  deleteAnimal,
};
