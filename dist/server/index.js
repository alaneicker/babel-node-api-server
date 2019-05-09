"use strict";

var _path = _interopRequireDefault(require("path"));

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var port = process.env.PORT || 9000;
var app = (0, _express["default"])();
var staticDir;

if (process.env.NODE_ENV === 'development') {
  staticDir = _path["default"].join(__dirname, '..', 'dist');
} else {
  staticDir = _path["default"].join(__dirname, '..');
}

app.use(_bodyParser["default"].json());
app.use(_express["default"]["static"](staticDir));
app.use((0, _cors["default"])());
app.get('/api/users', function (req, res) {
  res.send([{
    "name": {
      "fist": 'Alan',
      "last": 'Eicker',
      "mi": 'W'
    }
  }, {
    "name": {
      "fist": 'John',
      "last": 'Doe',
      "mi": 'S'
    }
  }]);
});
app.listen(port, function () {
  console.log("App listening on port ".concat(port, "."));
});
//# sourceMappingURL=index.js.map