var express = require('express'),
    bodyParser      = require('body-parser'),
    methodOverride  = require('method-override'),
    pspots          = require('./pspots'),
    app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(methodOverride());

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get('/spots', pspots.findAll);

app.set('port', process.env.PORT || 5001);

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
