const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models/");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected!");
  })
  .catch((err) => {
    console.log("Cannot connect to the databse!", err);
    process.exit();
  });

app.get(`/`, (req, res) => {
  res.json({
    message: "welcome to my program",
  });
});

require("./app/routes/dataPenduduk.routes")(app);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
