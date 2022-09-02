const tweetController = require("../controllers/tweet.controller");
const authJwt = require("../middlewares/authjwt");
module.exports = function(app) {
    app.port("/twitter/api/v1/tweet", [authJwt.verifyToken], tweetController.create);

    app.get("/twitter/api/v1/tweet/:id", [authjwt.verifyToken], tweetController.findAll)

    app.get("/twitter/api/v1/tweet/:userId", [authjwt.verifyToken], tweetController.getFollowingsOfUser);
}