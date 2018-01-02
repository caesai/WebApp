webpackJsonp([1],{

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configureStore;

var _redux = __webpack_require__(21);

var _reduxThunk = __webpack_require__(122);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(123);

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

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _popups = __webpack_require__(124);

var _popups2 = _interopRequireDefault(_popups);

var _auth = __webpack_require__(125);

var _auth2 = _interopRequireDefault(_auth);

var _reactRouterRedux = __webpack_require__(58);

var _redux = __webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({ popups: _popups2.default, authState: _auth2.default, routing: _reactRouterRedux.routerReducer });

exports.default = rootReducer;

/***/ }),

/***/ 124:
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

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = authState;
var initialState = {
  isAuthenticating: false,
  isAuthenticated: false,
  name: '',
  redirectingTo: ''
};

function authState() {
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
      return Object.assign({}, state, {
        name: action.payload.name,
        isAuthenticated: action.payload.isAuthenticated
      });
    default:
      return state;
  }
}

/***/ }),

/***/ 126:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(6);

var _actions = __webpack_require__(17);

var _utils = __webpack_require__(28);

var _MainMenu = __webpack_require__(130);

var _MainMenu2 = _interopRequireDefault(_MainMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(state) {
  return {
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
            _react2.default.createElement(_MainMenu2.default, null)
          ),
          _react2.default.createElement(
            'div',
            { className: 'logInBtn' },
            _react2.default.createElement(
              'a',
              { href: '#', onClick: function onClick(e) {
                  e.preventDefault();
                  _this2.props.dispatch(_actions.actions.openPopUp(_utils.signInPopUp));
                } },
              'Sign In/Up'
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

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(6);

var _reactRouterDom = __webpack_require__(13);

var _actions = __webpack_require__(17);

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

      console.log(this.props);
      return _react2.default.createElement(
        'form',
        { onSubmit: function onSubmit(e) {
            e.preventDefault();
            var input = e.target.querySelector('input');

            if (input.value !== 'admin') {
              _this2.props.dispatch(_actions.actions.throwPopUpError('Invalid login or password'));
            } else {
              _this2.props.dispatch(_actions.actions.login({
                name: input.value
              }));
              setTimeout(function () {
                if (_this2.props.isAuthenticating) {
                  _this2.props.history.push(_this2.props.redirectingTo);
                }
                _this2.props.dispatch(_actions.actions.closePopUp());
              }, 1000);
            }
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
    isAuthenticating: state.authState.isAuthenticating,
    redirectingTo: state.authState.redirectingTo
  };
};

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(authStateToProps)(signInForm));

/***/ }),

/***/ 130:
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

/***/ 131:
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
        { className: 'container' },
        _react2.default.createElement(
          'p',
          null,
          '\xA92018 Web App'
        )
      );
    }
  }]);

  return Footer;
}(_react2.default.Component);

exports.default = Footer;

/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(6);

var _utils = __webpack_require__(28);

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
        { className: 'popUp' },
        _react2.default.createElement(
          'div',
          { className: 'popUpCls', onClick: function onClick() {
              _this2.props.dispatch(_utils.actions.closePopUp());
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
      );
    }
  }]);

  return PopUp;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(mapStateToProps)(PopUp);

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(13);

var _reactRedux = __webpack_require__(6);

var _MainPage = __webpack_require__(134);

var _MainPage2 = _interopRequireDefault(_MainPage);

var _Profile = __webpack_require__(136);

var _Profile2 = _interopRequireDefault(_Profile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

var Routes = function Routes() {
  return _react2.default.createElement(
    _reactRouterDom.Switch,
    null,
    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _MainPage2.default }),
    _react2.default.createElement(_reactRouterDom.Route, { path: '/profile', component: _Profile2.default })
  );
};

exports.default = Routes;

/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _TopBlock = __webpack_require__(135);

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

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(6);

var _reactRouterDom = __webpack_require__(13);

var _utils = __webpack_require__(28);

var _actions = __webpack_require__(17);

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

/***/ 136:
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

var Profile = function (_React$Component) {
  _inherits(Profile, _React$Component);

  function Profile() {
    _classCallCheck(this, Profile);

    return _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).apply(this, arguments));
  }

  _createClass(Profile, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'h1',
          null,
          'Profile'
        )
      );
    }
  }]);

  return Profile;
}(_react2.default.Component);

exports.default = Profile;

/***/ }),

/***/ 17:
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
  }
};

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newsLetterPopUp = exports.signUpPopUp = exports.signInPopUp = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(6);

var _actions = __webpack_require__(17);

var _signInForm = __webpack_require__(129);

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

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(65);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(6);

var _reactRouterDom = __webpack_require__(13);

var _reactRouterRedux = __webpack_require__(58);

var _createBrowserHistory = __webpack_require__(45);

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _store = __webpack_require__(121);

var _store2 = _interopRequireDefault(_store);

__webpack_require__(126);

var _Header = __webpack_require__(128);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(131);

var _Footer2 = _interopRequireDefault(_Footer);

var _PopUp = __webpack_require__(132);

var _PopUp2 = _interopRequireDefault(_PopUp);

var _routes = __webpack_require__(133);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var store = (0, _store2.default)({});

var history = (0, _createBrowserHistory2.default)();

var mapStateToProps = function mapStateToProps(state) {
  return {
    popUpOpened: state.popups.popUpOpened
  };
};
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
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_routes2.default, null)
        ),
        _react2.default.createElement(_Footer2.default, null),
        this.props.popUpOpened ? _react2.default.createElement(_PopUp2.default, null) : null
      );
    }
  }]);

  return Root;
}(_react2.default.Component);

Root = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps)(Root));

var WebApp = function (_React$Component2) {
  _inherits(WebApp, _React$Component2);

  function WebApp() {
    _classCallCheck(this, WebApp);

    return _possibleConstructorReturn(this, (WebApp.__proto__ || Object.getPrototypeOf(WebApp)).apply(this, arguments));
  }

  _createClass(WebApp, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
          _reactRouterRedux.ConnectedRouter,
          { history: history },
          _react2.default.createElement(Root, null)
        )
      );
    }
  }]);

  return WebApp;
}(_react2.default.Component);

exports.default = WebApp;


_reactDom2.default.render(_react2.default.createElement(WebApp, { ref: function ref(instance) {
    if (instance) {
      // do something
    }
  } }), document.getElementById('webapp'), function () {
  console.log(this); // instance
});

/***/ })

},[62]);