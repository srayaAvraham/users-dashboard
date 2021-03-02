const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const posts = require("./app/routes/posts.routes");
const auth = require("./app/routes/auth.routes");
require("dotenv").config();
const db = require("./app/models");
const PORT = process.env.PORT || 8080;

let corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

db.mongoose
  .connect(
    `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });

app.get("/", (req, res) => {
  res.json({ message: "Welcome to application." });
});
app.use("/api/post", posts);
app.use("/api/auth", auth);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
