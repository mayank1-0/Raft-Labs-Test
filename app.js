const express = require('express')
const app = express()
const router = require('./routes/index')
const csvRouter = require('./routes/csv')
const bodyParser = require('body-parser')
const db = require('./db/models/index')
global.__basedir = __dirname + "/Raft-Labs-Test/..";
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');  

// const swaggerDocument = require('./swagger');

//Swagger Configuration  
const swaggerOptions = {  
    swaggerDefinition: {  
        info: {
            title:'Raft-Labs-Test',
            description: "Uploading csv files' data to database", //  desc.
            version:'3.0.3'
        },
        tags: [
            {
              name: "To import csv data from files to database", // name of a tag
            },
          ],
    },
    apis:['app.js'],
}  
const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerJSDoc));

app.use(bodyParser.json())

app.use('/api/v1/tasks', router)

// Swagger Definitions

/** 
 * @swagger 
 * /uploadAuthors:
 *   post: 
 *     description: Upload data to Authors table
 *     responses:  
 *       200: 
 *         description: Success  
 *   
 */

/** 
 * @swagger 
 * /uploadBooks: 
 *   post: 
 *     description: Upload data to Books table 
 *     responses:  
 *       200: 
 *         description: Success  
 *   
 */ 

/** 
 * @swagger 
 * /uploadMagazines: 
 *   post: 
 *     description: Upload data to Magazines table 
 *     responses:  
 *       200: 
 *         description: Success  
 *   
 */ 

/** 
 * @swagger 
 * /getAuthors: 
 *   get: 
 *     description: Get all authors
 *     responses:  
 *       200: 
 *         description: Success  
 *   
 */ 

/** 
 * @swagger 
 * /getBooks: 
 *   get: 
 *     description: Get all books
 *     responses:  
 *       200: 
 *         description: Success  
 *   
 */ 

/** 
 * @swagger 
 * /getMagazines: 
 *   get: 
 *     description: Get all magazines
 *     responses:  
 *       200: 
 *         description: Success  
 *   
 */ 

/** 
 * @swagger 
 * /getBookByIsbn/:isbn: 
 *   get: 
 *     description: Get book by it's isbn
 *     responses:  
 *       200: 
 *         description: Success  
 *   
 */ 

/** 
 * @swagger 
 * /getMagazineByIsbn/:isbn: 
 *   get: 
 *     description: Get magazine by it's isbn 
 *     responses:  
 *       200: 
 *         description: Success  
 *   
 */ 

/** 
 * @swagger 
 * /getMagazinesAndBooksByAuthor/:authorEmail: 
 *   get: 
 *     description: Get magazines and books by author's email 
 *     responses:  
 *       200: 
 *         description: Success  
 *   
 */ 

/** 
 * @swagger 
 * /getBooksAndMagazines: 
 *   get: 
 *     description: Get all books and magazines 
 *     responses:  
 *       200: 
 *         description: Success  
 *   
 */ 

/** 
 * @swagger 
 * /addBook: 
 *   post: 
 *     description: Add book to database 
 *     responses:  
 *       200: 
 *         description: Success  
 *   
 */ 

/** 
 * @swagger 
 * /addMagazine: 
 *   post: 
 *     description: Add magazine to database 
 *     responses:  
 *       200: 
 *         description: Success  
 *   
 */ 
app.use('/api/csv', csvRouter)

app.get('/', (req, res) => {
    res.send('Your app is live')
})
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


const start = () => {
    db.sequelize.sync()
    app.listen(3000)
    console.log('Your app is live at http://localhost:3000')
}

start()