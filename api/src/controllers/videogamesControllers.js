require("dotenv").config();
const { Videogame, Genres } = require("../db");
const { Op, UUID, UUIDV4 } = require("sequelize");
const { API_KEY } = process.env;
const axios = require("axios");

const URL = `https://api.rawg.io/api/games?key=${API_KEY}&page=`;

const getAllVideogames = async (req, res) => {
  try {
    const page = [1, 2, 3, 4, 5];
    const apiData = [];
    for (let i = 0; i < page.length; i++) {
      apiData.push((await axios.get(`${URL}${page[i]}`)).data.results);
    }
    const data = apiData.flat();
    const videogames = data.map((e) => {
      let platforms = e.platforms.map((v) => {
        return {
          id: v.platform.id,
          name: v.platform.name,
        };
      });
      return {
        name: e.name,
        platforms: platforms,
        image: e.background_image,
        launch_date: e.released,
        rating: e.rating,
      };
    });
    return videogames;
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllVideogames,
};
