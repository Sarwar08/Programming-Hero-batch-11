const express = require('express')

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("'Career-code-projec'server is ready");
})

app.listen(port, () => {
    console.log(`App is listening to port ${port}`);
});