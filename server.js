const express = require('express');
const app = express();
const path = require('path')
const port = 80;

app.use(express.static(path.join(__dirname, 'game')))
app.listen(port, () => { console.log(`RUNNING ON PORT: ${port}`) })