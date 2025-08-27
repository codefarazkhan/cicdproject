const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    // const test = "hello";
    res.send('Hello World 11');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});