webpackJsonp([1],{

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebApp = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(32);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(17);

var _store = __webpack_require__(69);

var _store2 = _interopRequireDefault(_store);

__webpack_require__(72);

var _Header = __webpack_require__(74);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var store = (0, _store2.default)({});

var WebApp = exports.WebApp = function (_React$Component) {
  _inherits(WebApp, _React$Component);

  function WebApp() {
    _classCallCheck(this, WebApp);

    return _possibleConstructorReturn(this, (WebApp.__proto__ || Object.getPrototypeOf(WebApp)).apply(this, arguments));
  }

  _createClass(WebApp, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log('Wtf');
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(_Header2.default, null)
      );
    }
  }]);

  return WebApp;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(WebApp, { ref: function ref(instance) {
    if (instance) {
      // do something
    }
  } }), document.getElementById('webapp'), function () {
  console.log(this); // instance
});

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configureStore;

var _redux = __webpack_require__(21);

var _reduxThunk = __webpack_require__(70);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(71);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({ reducer: _reducers2.default });

function configureStore(initialState) {
  var middleware = (0, _redux.applyMiddleware)(_reduxThunk2.default);
  var createStoreWithMiddleware = (0, _redux.compose)(middleware, typeof window !== 'undefined' && window.devToolsExtension ? window.devToolsExtension() : function (f) {
    return f;
  })(_redux.createStore);

  var store = createStoreWithMiddleware(rootReducer, initialState);

  return store;
}

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;
var reducerState = {
  loggedIn: false,
  popUpOpened: false
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : reducerState;
  var action = arguments[1];

  switch (action.type) {
    case 'OPEN_POPUP':
      return Object.assign({}, state, {
        popUpOpened: action.popUpState
      });
    default:
      return state;
  }
}

/***/ }),

/***/ 72:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(17);

var _MainMenu = __webpack_require__(75);

var _MainMenu2 = _interopRequireDefault(_MainMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    popUpOpened: state.reducer.popUpOpened
  };
};

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(_MainMenu2.default, null)
        ),
        _react2.default.createElement(
          'a',
          { href: '#' },
          'Sign In/Up'
        )
      );
    }
  }]);

  return Header;
}(_react2.default.Component);

Header = (0, _reactRedux.connect)(mapStateToProps)(Header);

exports.default = Header;

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MainMenu = function (_React$Component) {
  _inherits(MainMenu, _React$Component);

  function MainMenu() {
    _classCallCheck(this, MainMenu);

    return _possibleConstructorReturn(this, (MainMenu.__proto__ || Object.getPrototypeOf(MainMenu)).apply(this, arguments));
  }

  _createClass(MainMenu, [{
    key: "render",
    value: function render() {
      return [_react2.default.createElement(
        "li",
        { key: "1" },
        "Statement"
      ), _react2.default.createElement(
        "li",
        { key: "2" },
        "News"
      ), _react2.default.createElement(
        "li",
        { key: "3" },
        "Whitepaper"
      ), _react2.default.createElement(
        "li",
        { key: "4" },
        "Roadmap"
      ), _react2.default.createElement(
        "li",
        { key: "5" },
        "Rules"
      )];
    }
  }]);

  return MainMenu;
}(_react2.default.Component);

exports.default = MainMenu;

/***/ })

},[29]);