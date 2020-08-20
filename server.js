const express = require("express");
const body_parser = require("body-parser");
const cors = require("cors");
const models = require("./app/models");

const app = express();
const cors_options = {
  origin: "http://localhost:8081"
};

app.use(cors(cors_options));
// parse requests of content-type - application/json
app.use(body_parser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(body_parser.urlencoded({ extended: true }));

models.sequelize.sync();
// // drop the table if it already exists
// models.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync models.");
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to rest api" });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

require("./app/routes/turorial.routes")(app);
