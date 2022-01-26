const express = require('express');
const app = express()

let port = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("first build was done");
})

app.listen(port, () => {
    console.debug('the server api was started on port', port);
})