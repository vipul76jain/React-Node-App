const express = require('express')
var request = require('request')
const app = express()
const port = 5000

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/newEndPoint', (req, res) => res.send('This is my new end point!'))

app.get('/getusers', (req, res) => {
    request('https://jsonplaceholder.typicode.com/users', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            let parsebody = JSON.parse(body);
            res.send(parsebody)
        }
    })
})

app.listen(port, () => console.log('Example app listening on', port))