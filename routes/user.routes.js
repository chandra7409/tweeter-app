const followedController = require('../controllers/followed.controller');
module.exports = function(app) {
    app.post("/twitter/api/v1/follower", [authjwt.verifyToken], followingController.create)

    app.delete("/twitter/api/v1/following/:id", [authjwt.verifyToken], followingController.delete)

    app.get("/twitter/api/v1/users/:userId", [authjwt.verifyToken], followingController.getFollowingsOfUser);
}