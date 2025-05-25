const express = require('express');
const phones = require('./phones.json');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());


app.get('/', (req, res) => {
    res.send("Hello from phone server sidfj");
})

app.get('/phones', (req, res) => {
    res.send(phones);
})

app.get('/phones/:id', (req, res) => {

    const id = parseInt(req.params.id);
    console.log(`I need data for id: ${id}`);

    const phone = phones.find(ph => ph.id === id) || {};
    res.send(phone);

})

app.listen(port, () => {
    console.log(`app is listening to port: ${port}`);
});