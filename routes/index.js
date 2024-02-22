const express = require("express");
const route = express.Router();
const api = require("./api");

route.use(process.env.API, api);

module.exports = route;
