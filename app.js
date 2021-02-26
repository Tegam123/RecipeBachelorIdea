require('rootpath')();

// Express
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const errorHandler = require('_helpers/error-handler');
const cors = require('cors');

// Swagger
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Router imports
var userRouter = require('./router/users');
var adminRouter = require('./router/admin');
var recipeRouter = require('./router/recipe');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/// Swagger
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Express API to our recipe app',
        version: '1.0.0',
    },
    contact: {
        name: 'Victor',
        url: 'https://super.au.dk',
        email: 'Super@super.au.dk',
      },
    servers: [{
        url: 'http://localhost:5000',
        description: 'Development server',
      }, ],
    basePath: '/',
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        }
      }
    },

};

const options = {
    swaggerDefinition,
    // : {
    //     openapi: '3.0.1', // YOU NEED THIS
    //     info: {
    //       title: 'Your API title',
    //       version: '1.0.0',
    //       description: 'Your API description'
    //     },
    //     basePath: '/',
    //     components: {
    //       securitySchemes: {
    //         bearerAuth: {
    //           type: 'http',
    //           scheme: 'bearer',
    //           bearerFormat: 'JWT',
    //         }
    //       }
    //     },

    //   },
    apis: ['./router/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);



//Connects to db
require('./models/db');

//Swagger
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// trying with a router
app.use('/users', userRouter);
app.use('/recipes', recipeRouter);
app.use('/admin', adminRouter);


// Routes
//Call by baseurl/users/{Endpoint}
// app.use('/users', require('./users/users.controller'));
//app.use('/recipes', require('./recipes/recipe.controller'));
//app.use('/admin', require('./admin/admin.controller'));
app.use(cors());

// global error handler
app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === 'production' ? 80 : 5000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});