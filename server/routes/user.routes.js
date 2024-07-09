const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user.controller");

router.post("/user", UserController.createUser);
router.delete("/supUser", UserController.deleteUser);

module.exports = router;
