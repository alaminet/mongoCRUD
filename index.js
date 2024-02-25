require("dotenv").config();
const express = require("express");
const app = express();
const route = require("./routes");
const cors = require("cors");
const mongoConfig = require("./config/mongoConfig");

mongoConfig();
app.use(cors());
app.use(express.json());

app.use(route);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`server is running port ${port}`);
});
