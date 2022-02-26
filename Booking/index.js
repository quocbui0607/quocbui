const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const Sequelize = require("./database/sequelize");
const CONFIG = require("./config");

(async () => {
  try {
    // CORS
    app.use(cors());
    app.use(helmet());
    // body parse
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    // DB
    const { models, sequelize } = Sequelize(CONFIG.database);
    // Check connect to DB
    await sequelize.authenticate();
    // Create DB
    // await sequelize.sync({alfter: true});
    // await sequelize.sync({ force: true });

    // check connection
    app.get("/ping", (req, res) => {
      try {
        res.status(200).json();
      } catch (error) {
        res.status(400).json(error);
      }
    });
    // Start express server
    app.listen(3000, () => {
      console.log(`Server started at http://localhost:3000`);
    });
  } catch (e) {
    console.log(e);
  }
})();
