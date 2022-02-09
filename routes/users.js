const express = require("express");
const router = express.Router();
const controller = require("../controllers/user");

router.get("/", controller.getAll);
router.post("/", controller.save);
router.get("/:id", controller.get);
router.patch("/:id", controller.update);
router.delete("/:id", controller.deleteOne);

module.exports = router;
