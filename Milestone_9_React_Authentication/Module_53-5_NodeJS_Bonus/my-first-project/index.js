const express = require('express');
const app = express();
const port = 5000

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/data', (req, res) => {
    res.send('i am from data ddff');
})

app.listen(port, () => {
    console.log(`app is listening on port: ${port}`);
})