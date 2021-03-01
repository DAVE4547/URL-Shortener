const express = require('express')
const bodyParser = require('body-parser');
var cors = require('cors')
const app = express()
app.use(cors())

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.post('/', (req, res) => {
    res.status('200')
    res.send('https://google.com');
    console.log(req.body);
})


app.listen(3000, () => {
    console.log("Listening on port 3000...")
})