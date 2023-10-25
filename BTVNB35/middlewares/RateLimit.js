const rateLimit = require("express-rate-limit");
module.exports = rateLimit({
  windowMs: 120 * 1000,
  max: 2,
});
