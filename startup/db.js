const config = require("config");
const mongoose = require("mongoose");

const log = require("../services/log");

const uri = `mongodb://${config.get("db.user")}:${config.get(
  "db.pass"
)}@${config.get("db.host")}:${config.get("db.port")}/${config.get(
  "db.name"
)}?authSource=${config.get("db.auth")}`;

mongoose.connect(uri, config.get("db.options"), (err) => {
  if (err) {
    return log.error(err);
  }
  log.info(
    `Connected to mongodb on ${config.get("db.host")}:${config.get("db.port")}`
  );
});
