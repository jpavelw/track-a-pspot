exports.findAll = function (req, res, next) {
    var _file = require("fs");

    var _detectCharacterEncoding = require('detect-character-encoding');
    var _charsetMatch = _detectCharacterEncoding(_file.readFileSync('debug.txt'));

    _file.readFile('debug.txt', { encoding: _charsetMatch['encoding'] }, function(err, data) {
        var _spots = {};
        var _data = data.replace("\r\n", "\n").replace("\n\n", "\n").replace("\r", "\n").split("\n");
        for(var i = 0; i < _data.length-1; i++) {
            var _elems = _data[i].replace("\r", "").split(",");
            if(4 == _elems.length){
                _spots[_elems[2]] = {"lot_number": _elems[0], "section": _elems[1], "id": _elems[2], "availability": _elems[3]};
            }
        }
        res.send(_spots);
    });
};
