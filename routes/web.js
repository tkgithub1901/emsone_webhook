var express = require('express');
var homepageController = require('../controllers/homepageController');
var chatBotController = require('../controllers/chatBotController');

let router = express.Router();

let initWebRoutes = (app)=> {
    router.get("/", homepageController.getHomepage);
    router.get("/webhook", chatBotController.getWebhook);
    router.post("/webhook", chatBotController.postWebhook);

    return app.use("/", router);
};

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
module.exports = initWebRoutes;