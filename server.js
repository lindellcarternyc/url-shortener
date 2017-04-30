var express = require("express");
var app = express();

app.get('*', (req, res) => {
    console.log('req received');
    res.end();
});

var port = 8080;
app.listen(port, () => {
   console.log(`app listening on port ${port}`); 
});