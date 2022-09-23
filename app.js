const express = require('express')
const app = express()
const router = require('./routes/index')
const csvRouter = require('./routes/csv')
const bodyParser = require('body-parser')
const db = require('./db/models/index')
global.__basedir = __dirname + "/Raft-Labs-Test/..";
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger');

app.use(bodyParser.json())

app.use('/api/v1/tasks', router)
app.use('/api/csv', csvRouter)

app.get('/', (req, res) => {
    res.send('Your app is live')
})
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


const start = () => {
    db.sequelize.sync()
    app.listen(3000)
    console.log('Your app is live at http://localhost:3000')
}

start()