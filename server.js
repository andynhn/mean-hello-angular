const express = require('express'),
        bodyParser = require('body-parser'),
        app = express(), 
        port = 8000,
        db_name = "TaskAPI",
        // mongoose = require('mongoose'),
        path = require('path');

app.use(bodyParser.json());
// notice new static path for angular projects
// app.use(express.static(path.join(__dirname, './client/static')));
app.use(express.static( path.join(__dirname, './public/dist/public' )));
// mongoose.Promise = global.Promise;

require("./server/config/mongoose.js")(db_name);
require('./server/config/routes.js')(app)

app.listen(port, function() {
    console.log(`listening on port ${port}`);
})