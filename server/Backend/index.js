const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

// Use the cors middleware
app.use(cors());

app.get('/backend', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.end("React with Express/Node connected");
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
