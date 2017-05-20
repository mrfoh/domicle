//dependencies
const path = require('path'),
    fs = require('fs'),
    express = require('express'),
    bodyParser = require('body-parser'),
    favicon = require('serve-favicon');

const app = express();
// app port
app.set('port', (process.env.PORT || 4000));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(favicon(path.resolve(__dirname, '../public/favicon.ico')));
app.use(express.static(path.resolve(__dirname, '../public')));

//catch-all
app.get('/*', (req, res) => {
    res.sendFile('index.html', {root: '../public'});
});

//Start Server
app.listen(app.get('port'), () => {
    console.log('Listening on port %d', app.get('port'));
});
