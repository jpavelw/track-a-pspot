var _file = require("fs");
var _data = _file.readFileSync('spots.txt').toString().split("\n");
var _spots = [];
for(var i = 0; i < _data.length - 1; i++) {
    var _elems = _data[i].split(",");
    var _spot = {"lot_number": _elems[0], "section": _elems[1], "id": _elems[2], "availability": _elems[3]};
    _spots.push(_spot);
}
