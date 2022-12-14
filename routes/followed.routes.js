const followedController = require('../controllers/followed.controller');
module.exports = function(app) {
    app.post("/twitter/api/v1/follower", [authjwt.verifyToken], followerController.create)

    app.delete("/twitter/api/v1/follower/:id", [authjwt.verifyToken], followerController.delete)

    app.get("/twitter/api/v1/users/:userId/followers", [authjwt.verifyToken], followerController.getFollowersOfUser)
}