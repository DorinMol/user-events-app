const express = require("express");

const log = require("./services/log");
require("./startup/db");
const userRouter = require("./routes/users");
const loginRouter = require("./routes/login");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRouter);
app.use("/login", loginRouter);

app.listen(9000, () => {
  log.info("Started oke");
});
