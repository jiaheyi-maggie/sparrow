// nodeJS server
const express = require('express');
const bodyParser = require('body-parser');
const port = 19002;

const app = express();


app.get('/', (req, res) => {
    res.send('Hello World!')
    console.log(req);
})
  
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})