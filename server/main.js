const express = require("express");
const sequelize = require("./config/sequelize");
const User = require("./models/user.model");
const userRoutes = require("./routes/user.routes");
const cors = require("cors");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.use(express.json());

app.use("/api", userRoutes);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening on ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
