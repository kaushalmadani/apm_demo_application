const tracker = require('@middleware.io/node-apm');
tracker.track();
var express = require('express');  
var app = express();
app.get('/root', function (req, res) {
    tracker.info('root page api called');
    res.send('Welcome to root page!');
});
app.get('/first', function (req, res) {
    tracker.info('first page');
    tracker.warn('first page');
    tracker.error('first page');
    res.send('Welcome to first page!');
});
app.get('/error', function (req, res) {
    tracker.error('error page');
    // res.send('Welcome to error page!');
    res.status(500).send("wrong");
});
app.get('/warn', function (req, res) {
    tracker.warn('warn page');
    res.send('Welcome to warn page!');
});
app.get('/debug', function (req, res) {
    tracker.info('debug page');
    res.send('Welcome to debug page!');
});
app.get('/export', function (req, res) {
    tracker.info('export page');
    res.send('Welcome to export page!');
});
var server = app.listen(8400, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});     