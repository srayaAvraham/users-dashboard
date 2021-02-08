const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8080;

require('dotenv').config();
let corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");

db.mongoose
  .connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });


app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require('./app/routes/auth.routes')(app);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});