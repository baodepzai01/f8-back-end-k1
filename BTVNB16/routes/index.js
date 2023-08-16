var express = require("express");
var router = express.Router();
const HomeController = require("../controllers/HomeController");
const loginController = require("../controllers/loginController");

/* GET home page. */
router.get("/", HomeController.index);
router.get("/dang-nhap/login", loginController.add);
router.get("/dang-nhap", loginController.add);
router.post("/dang-nhap/login", loginController.handleAdd);

module.exports = router;
