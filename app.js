require('rootpath')();
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const errorHandler = require('_helpers/error-handler');
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Connects to db
require('./models/db');

//Middleware

// Routes
//Call by baseurl/users/{Endpoint}
app.use('/users', require('./users/users.controller'));
app.use(cors());  

// global error handler
app.use(errorHandler);

// app.get("/", (req, res) => {
//    res.status(200)
//    res.json({"message" : "Front page"});
// });

// app.get("/Opskrifter", (req, res) => {
//   res.send("Her er nogle opskrifter...");
// });

// start server
const port = process.env.NODE_ENV === 'production' ? 80 : 5000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});