const FacebookStrategy = require("passport-facebook");
module.exports = new FacebookStrategy(
  {
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: process.env.FACEBOOK_CALLBACK_URL,
  },
  function (accessToken, refreshToken, profile, cb) {
    return cb(null, profile);
  }
);
