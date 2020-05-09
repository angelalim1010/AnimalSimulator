const pool = require("./pool");

const getAnimals = async (request, response) => {
  await pool.query("SELECT * FROM animalsettings ORDER BY id DESC", (error, results) => {
    if (error) {
      throw error;
    }
    response.json(results.rows);
  });
};

const updateAnimal = async (request, response) => {
  const { name, type } = request.body;
  try {
    await pool.query("BEGIN");
    //await pool.query("DELETE FROM animalsettings WHERE id IN (SELECT id FROM animalsettings ORDER BY id LIMIT 1)");
    await pool.query("INSERT INTO animalsettings (name, type) VALUES ($1, $2)", [name, type]);
    let numOfRows; 
    await pool.query("SELECT count(*) FROM animalsettings", (error, results) => {
      if (error) {
        throw error;
      }
      numOfRows = results.rows[0].count;
      if(numOfRows >= 5)
      {
        pool.query("DELETE FROM animalsettings WHERE id = (SELECT MIN(id) FROM animalsettings)"), (error,results) => {
          if(error) {
            throw error;
          }
        }
      }
    });
    await pool.query("COMMIT");
    response.status(201).end();
  } catch (error) {
    await pool.query("ROLLBACK");
    throw error;
  }
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
  getAnimals,
  updateAnimal,
  addAnimal,
  deleteAnimal,
};
