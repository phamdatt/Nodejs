const express = require('express')
const app = express()
const port = 3000

//Router
app.get('/', (requqest, response) => {
    var a = 1;
    var b = 2;
    var c = a + b;
    response.send('Hello World!')
})
app.get('/tin-tuc', (requqest, response) => {
    response.send('I love code')
})

//IP :127.0.0.1 - localhost
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})