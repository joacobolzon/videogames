const { getAllVideogames } = require("../controllers/videogamesControllers.js");

const getAllVideogamesHandler = async (req, res) => {
  try {
    const data = await getAllVideogames();
    console.log(data.length);
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  getAllVideogamesHandler,
};
