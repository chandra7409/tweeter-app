const express = require("express");
const app = express();
const dotenv = require("dotenv");
const session = require('express-session');
dotenv.config();
const passport = require("passport");
const { loginCheck } = require("./auth/passport");
loginCheck(passport);

//BodyParsing
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: 'oneboy',
    saveUninitialized: true,
    resave: true
}));

function init() {
    var userData = [{
            email: "random123@gmail.com",
            username: "random123",
            name: "Anonymous1"
        },
        {
            email: "random000@gmail.com",
            username: "random000",
            name: "Anonymous2"
        }
    ]

    var tweetData = [{
            body: "Hi this is my first tweet",
            username: "random 123"
        },
        {
            body: "Hi this is my second tweet",
            username: "random000"
        }
    ]

    var followerData = [{
        id: "random123",
        followerId: "random000"
    }]

    var followingData = [{
        id: "random000",
        followingId: "random123"
    }]

    db.user.bulkCreate(userData).then(() => {
        console.log("User table initialised");
    }).catch((err) => {
        console.log("Error while initialising data", err);
    })

    db.tweet.bulkCreate(tweetData).then(() => {
        console.log("tweet table initialised");
    }).catch((err) => {
        console.log("Error while initialising data", err);
    })

    db.follower.bulkCreate(followerData).then(() => {
        console.log("Follower table initialised");
    }).catch((err) => {
        console.log("Error while initialising data", err);
    })
}

db.user.hasMany(db.tweet);
db.user.hasMany(db.follower);
db.user.hasMany(db.following);

db.sequelize.sync({ force: true }).then(() => {
    console.log("Table dropped and recreated");
    init();
})

app.use(passport.initialize());
app.use(passport.session());
//Routes
app.use("/", require("./routes/login"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log("Server has started at port " + PORT));