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
            version:'3.0.3'  
        }  
    },  
    apis:['app.js'],  
}  
const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerJSDoc));

app.use(bodyParser.json())

app.use('/api/v1/tasks', router)

/** 
 * @swagger 
 * /Employees: 
 *   get: 
 *     description: Get all Employee 
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