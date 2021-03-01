const express = require('express')
const bodyParser = require('body-parser');
var cors = require('cors') // CORS to support browsers
const app = express()
app.use(cors())
require('dotenv').config()

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var web = require('./router/web')
var apiv1 = require('./router/api-v1')

app.use(express.static('public'))
app.use('/', web)
app.use('/api/v1/', apiv1)

app.listen(3000, () => {
    console.log("Listening on port 3000...")
})