exports.ids = [2];
exports.modules = {

/***/ 123:
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ 124:
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),

/***/ 128:
/***/ (function(module, exports) {

module.exports = require("constants");

/***/ }),

/***/ 130:
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),

/***/ 131:
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configureStore;

var _redux = __webpack_require__(20);

var _reduxThunk = __webpack_require__(137);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(138);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function configureStore(initialState) {
  var middleware = (0, _redux.applyMiddleware)(_reduxThunk2.default);
  var createStoreWithMiddleware = (0, _redux.compose)(middleware, typeof window !== 'undefined' && window.devToolsExtension ? window.devToolsExtension() : function (f) {
    return f;
  })(_redux.createStore);

  var store = createStoreWithMiddleware(_reducers2.default, initialState);

  return store;
}

/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _popups = __webpack_require__(139);

var _popups2 = _interopRequireDefault(_popups);

var _auth = __webpack_require__(140);

var _auth2 = _interopRequireDefault(_auth);

var _reactRouterRedux = __webpack_require__(141);

var _redux = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({ popups: _popups2.default, user: _auth2.default, routing: _reactRouterRedux.routerReducer });

exports.default = rootReducer;

/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = popups;
var reducerState = {
  loggedIn: false,
  popUpOpened: false,
  popUpBody: {
    title: '',
    body: ''
  },
  err: ''
};

function popups() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : reducerState;
  var action = arguments[1];

  switch (action.type) {
    case 'OPEN_POPUP':
      return Object.assign({}, state, {
        popUpOpened: true,
        popUpBody: action.payload
      });
    case 'CLOSE_POPUP':
      return Object.assign({}, state, {
        popUpOpened: false,
        popUpBody: {},
        err: ''
      });
    case 'CATCH_POPUP_ERROR':
      return Object.assign({}, state, {
        err: action.err
      });
    default:
      return state;
  }
}

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = user;
var initialState = {
  isAuthenticating: false,
  isAuthenticated: false,
  token: '',
  name: '',
  redirectingTo: ''
};

function user() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case 'LOGIN_REQUEST':
      return Object.assign({}, state, {
        isAuthenticating: true,
        name: action.payload.name,
        redirectingTo: action.payload.nextUrl
      });
    case 'LOGIN_SUCCESS':
      localStorage.setItem('token', action.payload.token);
      return Object.assign({}, state, {
        isAuthenticating: false,
        name: action.payload.name,
        isAuthenticated: action.payload.isAuthenticated,
        token: action.payload.token
      });
    case 'LOGOUT':
      localStorage.removeItem('token');
      return initialState;
    default:
      return state;
  }
}

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(5);

var _actions = __webpack_require__(6);

var _utils = __webpack_require__(64);

var _MainMenu = __webpack_require__(154);

var _MainMenu2 = _interopRequireDefault(_MainMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    isAuthenticated: state.user.isAuthenticated,
    userName: state.user.name,
    popUpOpened: state.popups.popUpOpened
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
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'header' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: '/' },
                'Main Page'
              )
            ),
            _react2.default.createElement(_MainMenu2.default, null)
          ),
          _react2.default.createElement(
            'div',
            { className: 'logInBtn' },
            !this.props.isAuthenticated ? _react2.default.createElement(
              'a',
              { href: '#', onClick: function onClick(e) {
                  e.preventDefault();
                  _this2.props.dispatch(_actions.actions.openPopUp(_utils.signInPopUp));
                } },
              'Sign In/Up'
            ) : _react2.default.createElement(
              'div',
              { className: 'userMenu' },
              _react2.default.createElement(
                'p',
                null,
                this.props.userName
              ),
              _react2.default.createElement(
                'ul',
                { className: 'userMenuList' },
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'a',
                    { href: '/profile' },
                    'Profile'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { onClick: function onClick() {
                      _this2.props.dispatch(_actions.actions.logout());
                    } },
                  'Log Out'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react2.default.Component);

Header = (0, _reactRedux.connect)(mapStateToProps)(Header);

exports.default = Header;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(5);

var _reactRouterDom = __webpack_require__(9);

var _actions = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var signInForm = function (_React$Component) {
  _inherits(signInForm, _React$Component);

  function signInForm() {
    _classCallCheck(this, signInForm);

    return _possibleConstructorReturn(this, (signInForm.__proto__ || Object.getPrototypeOf(signInForm)).apply(this, arguments));
  }

  _createClass(signInForm, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'form',
        { onSubmit: function onSubmit(e) {
            e.preventDefault();
            var input = e.target.querySelector('input');
            // Fake authentication
            if (input.value !== 'admin') {
              _this2.props.dispatch(_actions.actions.throwPopUpError('Invalid login or password'));
            } else {
              _this2.props.dispatch(_actions.actions.login({
                name: input.value
              }));
              setTimeout(function () {
                if (_this2.props.isAuthenticating) {
                  _this2.props.dispatch(_actions.actions.auth({
                    name: 'admin',
                    isAuthenticated: true,
                    token: 'serverToken'
                  }));
                }
                _this2.props.dispatch(_actions.actions.closePopUp());
              }, 1000);
            }
            // Fake authentication
          } },
        _react2.default.createElement(
          'p',
          null,
          'Enter your login or email'
        ),
        _react2.default.createElement('input', { type: 'text' }),
        _react2.default.createElement(
          'p',
          null,
          'Enter password'
        ),
        _react2.default.createElement('input', { type: 'password' }),
        _react2.default.createElement(
          'button',
          { type: 'submit' },
          'Submit'
        ),
        _react2.default.createElement(
          'p',
          { className: 'errormsg' },
          this.props.err ? this.props.err : null
        ),
        _react2.default.createElement(
          'p',
          null,
          'Or use your FaceBook account to authorize'
        )
      );
    }
  }]);

  return signInForm;
}(_react2.default.Component);

var authStateToProps = function authStateToProps(state) {
  return {
    isAuthenticating: state.user.isAuthenticating,
    redirectingTo: state.user.redirectingTo
  };
};

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(authStateToProps)(signInForm));

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

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

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container footer' },
        _react2.default.createElement(
          'div',
          { className: 'footerBlock' },
          _react2.default.createElement(
            'p',
            null,
            '\xA92018 Web App'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'footerBlock' },
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              'a',
              { target: '_blank', href: 'https://github.com/caesai/' },
              _react2.default.createElement(
                'svg',
                { 'aria-hidden': 'true', className: 'octicon octicon-mark-github', height: '24', version: '1.1', viewBox: '0 0 16 16', width: '24' },
                _react2.default.createElement('path', { fillRule: 'evenodd', d: 'M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z' })
              )
            ),
            _react2.default.createElement(
              'a',
              { target: '_blank', href: 'https://twitter.com/sushkazzlo' },
              _react2.default.createElement(
                'svg',
                { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 335 276', fill: '#3ba9ee' },
                _react2.default.createElement('path', { d: 'm302 70a195 195 0 0 1 -299 175 142 142 0 0 0 97 -30 70 70 0 0 1 -58 -47 70 70 0 0 0 31 -2 70 70 0 0 1 -57 -66 70 70 0 0 0 28 5 70 70 0 0 1 -18 -90 195 195 0 0 0 141 72 67 67 0 0 1 116 -62 117 117 0 0 0 43 -17 65 65 0 0 1 -31 38 117 117 0 0 0 39 -11 65 65 0 0 1 -32 35' })
              )
            )
          )
        )
      );
    }
  }]);

  return Footer;
}(_react2.default.Component);

exports.default = Footer;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(5);

var _actions = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    popUpOpened: state.popups.popUpOpened,
    popUpBody: {
      title: state.popups.popUpBody.title,
      btns: state.popups.popUpBody.btns,
      body: state.popups.popUpBody.body
    }
  };
};

var PopUp = function (_React$Component) {
  _inherits(PopUp, _React$Component);

  function PopUp() {
    _classCallCheck(this, PopUp);

    return _possibleConstructorReturn(this, (PopUp.__proto__ || Object.getPrototypeOf(PopUp)).apply(this, arguments));
  }

  _createClass(PopUp, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'blackbg', onClick: function onClick(e) {
            if (e.target === e.currentTarget) {
              _this2.props.dispatch(_actions.actions.closePopUp());
            }
          } },
        _react2.default.createElement(
          'div',
          { className: 'popUp' },
          _react2.default.createElement(
            'div',
            { className: 'popUpCls', onClick: function onClick() {
                _this2.props.dispatch(_actions.actions.closePopUp());
              } },
            'x'
          ),
          _react2.default.createElement(
            'div',
            { className: 'popUpHead' },
            _react2.default.createElement(
              'h3',
              null,
              this.props.popUpBody.title && this.props.popUpBody.title
            ),
            this.props.popUpBody.btns ? _react2.default.createElement(this.props.popUpBody.btns, null) : null
          ),
          _react2.default.createElement(
            'div',
            { className: 'popUpBody' },
            _react2.default.createElement(this.props.popUpBody.body, null)
          )
        )
      );
    }
  }]);

  return PopUp;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(mapStateToProps)(PopUp);

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(9);

var _AuthenticatedComponent = __webpack_require__(158);

var _AuthenticatedComponent2 = _interopRequireDefault(_AuthenticatedComponent);

var _serverRouting = __webpack_require__(65);

var _MainPage = __webpack_require__(159);

var _MainPage2 = _interopRequireDefault(_MainPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [{
  component: _MainPage2.default,
  path: function path(parentRoute) {
    return parentRoute + '/';
  },
  routes: [{
    path: function path(parentRoute) {
      return parentRoute + '/profile';
    },
    component: (0, _serverRouting.generateAsyncRouteComponent)({
      loader: function loader() {
        return new Promise(function (resolve) {
          __webpack_require__.e/* require.ensure */(0).then((function (require) {
            resolve(__webpack_require__(161));
          }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
        });
      }
    })
  }]
}];

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = requireAuthentication;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(5);

var _reactRouterDom = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function requireAuthentication(Component) {
  var AuthenticatedComponent = function (_React$Component) {
    _inherits(AuthenticatedComponent, _React$Component);

    function AuthenticatedComponent() {
      _classCallCheck(this, AuthenticatedComponent);

      return _possibleConstructorReturn(this, (AuthenticatedComponent.__proto__ || Object.getPrototypeOf(AuthenticatedComponent)).apply(this, arguments));
    }

    _createClass(AuthenticatedComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.checkAuth(this.props.user);
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        this.checkAuth(nextProps.user);
      }
    }, {
      key: 'checkAuth',
      value: function checkAuth(user) {
        var _this2 = this;

        if (!user.isAuthenticated) {
          setTimeout(function () {
            _this2.props.history.push('/');
          }, 2000);
        }
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          null,
          this.props.user.isAuthenticated === true ? _react2.default.createElement(Component, this.props) : _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement(
              'p',
              null,
              'You need to be authenticated to see this page content'
            )
          )
        );
      }
    }]);

    return AuthenticatedComponent;
  }(_react2.default.Component);

  function mapStateToProps(state) {
    return {
      user: state.user
    };
  }

  return (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps)(AuthenticatedComponent));
}

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _TopBlock = __webpack_require__(160);

var _TopBlock2 = _interopRequireDefault(_TopBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MainPage = function (_React$Component) {
  _inherits(MainPage, _React$Component);

  function MainPage() {
    _classCallCheck(this, MainPage);

    return _possibleConstructorReturn(this, (MainPage.__proto__ || Object.getPrototypeOf(MainPage)).apply(this, arguments));
  }

  _createClass(MainPage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(_TopBlock2.default, null)
      );
    }
  }]);

  return MainPage;
}(_react2.default.Component);

exports.default = MainPage;

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(5);

var _reactRouterDom = __webpack_require__(9);

var _utils = __webpack_require__(64);

var _actions = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    popUpOpened: state.popups.popUpOpened,
    location: state.routing
  };
};

var TopBlock = function (_React$Component) {
  _inherits(TopBlock, _React$Component);

  function TopBlock() {
    _classCallCheck(this, TopBlock);

    return _possibleConstructorReturn(this, (TopBlock.__proto__ || Object.getPrototypeOf(TopBlock)).apply(this, arguments));
  }

  _createClass(TopBlock, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          null,
          'WebApp'
        ),
        _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement(
            'b',
            null,
            'WebApp'
          ),
          ' is a React based JavaScript application with main landing page consisting info about some product and user profile page'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Application provides authorization through OAuth2 or back-end authorization on server side'
        ),
        _react2.default.createElement(
          'button',
          { onClick: function onClick() {
              _this2.props.dispatch(_actions.actions.openPopUp(_utils.signInPopUp));
            } },
          'Sign in'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Fill admin admin in sign in pop up window and you will get to the profile page'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Also user can subscribe to newsletter'
        ),
        _react2.default.createElement(
          'button',
          { onClick: function onClick() {
              _this2.props.dispatch(_actions.actions.openPopUp(_utils.newsLetterPopUp));
            } },
          'Subscribe'
        )
      );
    }
  }]);

  return TopBlock;
}(_react2.default.Component);

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps)(TopBlock));

/***/ }),

/***/ 27:
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ 58:
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var actions = exports.actions = {
  openPopUp: function openPopUp(payload) {
    return {
      type: 'OPEN_POPUP',
      payload: payload
    };
  },
  closePopUp: function closePopUp() {
    return {
      type: 'CLOSE_POPUP'
    };
  },
  throwPopUpError: function throwPopUpError(errmsg) {
    return {
      type: 'CATCH_POPUP_ERROR',
      err: errmsg
    };
  },
  login: function login(payload) {
    return function (dispatch) {
      dispatch({
        type: 'LOGIN_REQUEST',
        payload: {
          name: payload.name,
          nextUrl: '/profile'
        }
      });
    };
  },

  auth: function auth(payload) {
    return {
      type: 'LOGIN_SUCCESS',
      payload: payload
    };
  },
  logout: function logout() {
    return {
      type: 'LOGOUT'
    };
  }
};

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newsLetterPopUp = exports.signUpPopUp = exports.signInPopUp = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(5);

var _actions = __webpack_require__(6);

var _signInForm = __webpack_require__(153);

var _signInForm2 = _interopRequireDefault(_signInForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var signUpForm = function signUpForm() {
  return _react2.default.createElement(
    'form',
    { onSubmit: function onSubmit(e) {
        e.preventDefault();
      } },
    _react2.default.createElement(
      'p',
      null,
      'Enter your login'
    ),
    _react2.default.createElement('input', { type: 'text' }),
    _react2.default.createElement(
      'p',
      null,
      'Enter your email'
    ),
    _react2.default.createElement('input', { type: 'text' }),
    _react2.default.createElement(
      'p',
      null,
      'Enter password'
    ),
    _react2.default.createElement('input', { type: 'password' }),
    _react2.default.createElement(
      'p',
      null,
      'Confirm your password'
    ),
    _react2.default.createElement('input', { type: 'password' }),
    _react2.default.createElement(
      'button',
      { type: 'submit' },
      'Submit'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Or use your FaceBook account to authorize'
    )
  );
};

var signInUpBtns = function signInUpBtns(props) {
  return _react2.default.createElement(
    'div',
    { onClick: function onClick(e) {
        e.currentTarget.querySelector('.active').classList.remove('active');
        if (e.target && e.target.nodeName === 'H3') {
          var btnValue = e.target.innerText;
          e.target.classList.add('active');
          props.dispatch(_actions.actions.openPopUp(btnValue === 'Sign Up' ? signUpPopUp : signInPopUp));
        }
      } },
    _react2.default.createElement(
      'h3',
      { className: 'active' },
      'Sign In'
    ),
    _react2.default.createElement(
      'h3',
      null,
      'Sign Up'
    )
  );
};

var newsLetter = function newsLetter(props) {
  return _react2.default.createElement(
    'form',
    { onSubmit: function onSubmit(e) {
        e.preventDefault();
        var inputs = e.target.querySelectorAll('input');
        try {
          inputs.forEach(function (val) {
            if (val.value === '') {
              throw e;
            }
          });
        } catch (e) {
          props.dispatch(_actions.actions.throwPopUpError('Invalid email address'));
        }
      } },
    _react2.default.createElement(
      'p',
      null,
      'Enter your email to subscribe'
    ),
    _react2.default.createElement('input', { type: 'text' }),
    _react2.default.createElement(
      'p',
      { className: 'errormsg' },
      props.err ? props.err : null
    ),
    _react2.default.createElement(
      'button',
      { type: 'submit' },
      'Submit'
    )
  );
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    title: state.popups.popUpBody.title,
    btns: state.popups.popUpBody.btns,
    body: state.popups.popUpBody.body
  };
};

var mapErrorsToProps = function mapErrorsToProps(state) {
  return {
    err: state.popups.err
  };
};

signInUpBtns = (0, _reactRedux.connect)(mapStateToProps)(signInUpBtns);
newsLetter = (0, _reactRedux.connect)(mapErrorsToProps)(newsLetter);

var signInPopUp = exports.signInPopUp = {
  btns: signInUpBtns,
  body: _signInForm2.default,
  err: ''
};

var signUpPopUp = exports.signUpPopUp = {
  btns: signInUpBtns,
  body: signUpForm,
  err: ''
};

var newsLetterPopUp = exports.newsLetterPopUp = {
  title: 'Subscribe to our newsletter',
  body: newsLetter
};

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.generateAsyncRouteComponent = generateAsyncRouteComponent;
exports.ensureReady = ensureReady;
exports.convertCustomRouteConfig = convertCustomRouteConfig;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(63);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Returns a new React component, ready to be instantiated.
 * Note the closure here protecting Component, and providing a unique
 * instance of Component to the static implementation of `load`.
 */
function generateAsyncRouteComponent(_ref) {
  var loader = _ref.loader,
      Placeholder = _ref.Placeholder;

  var Component = null;
  return function (_React$Component) {
    _inherits(AsyncRouteComponent, _React$Component);

    _createClass(AsyncRouteComponent, null, [{
      key: 'load',

      /**
       * Static so that you can call load against an uninstantiated version of
       * this component. This should only be called one time outside of the
       * normal render path.
       */
      value: function load() {
        return loader().then(function (ResolvedComponent) {
          Component = ResolvedComponent.default || ResolvedComponent;
        });
      }
    }]);

    function AsyncRouteComponent() {
      _classCallCheck(this, AsyncRouteComponent);

      var _this = _possibleConstructorReturn(this, (AsyncRouteComponent.__proto__ || Object.getPrototypeOf(AsyncRouteComponent)).call(this));

      _this.updateState = _this.updateState.bind(_this);
      _this.state = {
        Component: Component
      };
      return _this;
    }

    _createClass(AsyncRouteComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        AsyncRouteComponent.load().then(this.updateState);
      }
    }, {
      key: 'updateState',
      value: function updateState() {
        // Only update state if we don't already have a reference to the
        // component, this prevent unnecessary renders.
        if (this.state.Component !== Component) {
          this.setState({
            Component: Component
          });
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var ComponentFromState = this.state.Component;

        if (ComponentFromState) {
          return _react2.default.createElement(ComponentFromState, this.props);
        }

        if (Placeholder) {
          return _react2.default.createElement(Placeholder, this.props);
        }

        return null;
      }
    }]);

    return AsyncRouteComponent;
  }(_react2.default.Component);
}

/**
 * First match the routes via react-router-config's `matchRoutes` function.
 * Then iterate over all of the matched routes, if they've got a load function
 * call it.
 *
 * This helps us to make sure all the async code is loaded before rendering.
 */
function ensureReady(routeConfig, providedLocation) {
  var matches = (0, _reactRouterConfig.matchRoutes)(routeConfig, providedLocation || location.pathname);
  return Promise.all(matches.map(function (match) {
    var component = match.route.component;

    if (component && component.load) {
      return component.load();
    }
    return undefined;
  }));
}

function convertCustomRouteConfig(customRouteConfig, parentRoute) {
  return customRouteConfig.map(function (route) {
    if (typeof route.path === 'function') {
      var _pathResult = route.path(parentRoute || '').replace('//', '/');
      return {
        path: _pathResult,
        component: route.component,
        exact: route.exact,
        routes: route.routes ? convertCustomRouteConfig(route.routes, _pathResult) : []
      };
    }
    var pathResult = '' + parentRoute + route.path;
    return {
      path: pathResult,
      component: route.component,
      exact: route.exact,
      routes: route.routes ? convertCustomRouteConfig(route.routes, pathResult) : []
    };
  });
}

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = render2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(69);

var _reactRedux = __webpack_require__(5);

var _reactRouterDom = __webpack_require__(9);

var _nodeLocalstorage = __webpack_require__(122);

var _store = __webpack_require__(136);

var _store2 = _interopRequireDefault(_store);

var _reactRouterConfig = __webpack_require__(63);

__webpack_require__(150);

var _Header = __webpack_require__(152);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(155);

var _Footer2 = _interopRequireDefault(_Footer);

var _PopUp = __webpack_require__(156);

var _PopUp2 = _interopRequireDefault(_PopUp);

var _routes = __webpack_require__(157);

var _routes2 = _interopRequireDefault(_routes);

var _actions = __webpack_require__(6);

var _serverRouting = __webpack_require__(65);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/*import createHistory from 'history/createBrowserHistory';*/


var routeConfig = (0, _serverRouting.convertCustomRouteConfig)(_routes2.default);

var store = (0, _store2.default)({});

var mapStateToProps = function mapStateToProps(state) {
  return {
    popUpOpened: state.popups.popUpOpened
  };
};

if (typeof localStorage === 'undefined' || localStorage === null) {
  var localStorage = new _nodeLocalstorage.LocalStorage('./scratch');
}

var token = localStorage.getItem('token');

if (token !== null) {
  store.dispatch(_actions.actions.auth({
    name: 'admin',
    isAuthenticated: true,
    token: token
  }));
}

if (typeof window !== 'undefined') {
  (0, _serverRouting.ensureReady)(routeConfig).then(function () {
    (0, _reactDom.render)(_react2.default.createElement(
      BrowserRouter,
      null,
      (0, _reactRouterConfig.renderRoutes)(routeConfig)
    ));
  });
}

var Root = function (_React$Component) {
  _inherits(Root, _React$Component);

  function Root(props) {
    _classCallCheck(this, Root);

    return _possibleConstructorReturn(this, (Root.__proto__ || Object.getPrototypeOf(Root)).call(this, props));
  }

  _createClass(Root, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.props.popUpOpened ? _react2.default.createElement(_PopUp2.default, null) : null
      );
    }
  }]);

  return Root;
}(_react2.default.Component);

Root = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps)(Root));

function render2(location, props) {
  return (0, _serverRouting.ensureReady)(routeConfig, location).then(function () {
    return _react2.default.createElement(
      _reactRedux.Provider,
      { store: store },
      _react2.default.createElement(
        _reactRouterDom.StaticRouter,
        { context: {}, location: location },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_Header2.default, null),
          _react2.default.createElement(
            'div',
            null,
            (0, _reactRouterConfig.renderRoutes)(routeConfig, props)
          ),
          _react2.default.createElement(Root, null),
          _react2.default.createElement(_Footer2.default, null)
        )
      )
    );
  });
}

/***/ })

};;