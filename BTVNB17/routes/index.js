var express = require("express");
var router = express.Router();

const IndexController = require("../controllers/IndexController");
const AboutController = require("../controllers/AboutController");
const ContactController = require("../controllers/ContactController");
const GalleryController = require("../controllers/GalleryController");
const ServicesController = require("../controllers/ServicesController");

/* GET home page. */
router.get("/backend_template01/index.html", IndexController.index);
router.get("/backend_template01/about.html", AboutController.about);
router.get("/backend_template01/contact.html", ContactController.contact);
router.get("/backend_template01/gallery.html", GalleryController.gallery);
router.get("/backend_template01/services.html", ServicesController.services);

module.exports = router;
