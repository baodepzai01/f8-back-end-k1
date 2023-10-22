var express = require("express");
var router = express.Router();
const UserController = require("../controllers/UserController");
const CheckPermissionMiddleware = require("../middlewares/CheckPermissionMiddleware");

/* GET users listing. */
router.get("/", CheckPermissionMiddleware.read, UserController.index);
router.get("/permission/:id", UserController.permission);
router.post("/permission/:id", UserController.handlePermission);

module.exports = router;
