const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {
  getAllVideogamesHandler,
} = require("../handlers/videogamesHandlers.js");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/", getAllVideogamesHandler);

module.exports = router;
