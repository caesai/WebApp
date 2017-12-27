webpackJsonp([1],{

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;
var reducerState = {
  loggedIn: false,
  popUpOpened: false,
  popUpBody: {
    title: '',
    body: ''
  },
  err: ''
};

function reducer() {
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

/***/ 123:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(8);

var _utils = __webpack_require__(27);

var _MainMenu = __webpack_require__(126);

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
                  _this2.props.dispatch(_utils.actions.openPopUp(_utils.signInPopUp));
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

/***/ 126:
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

/***/ 127:
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

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(8);

var _utils = __webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    popUpOpened: state.reducer.popUpOpened,
    popUpBody: {
      title: state.reducer.popUpBody.title,
      btns: state.reducer.popUpBody.btns,
      body: state.reducer.popUpBody.body
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

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(20);

var _MainPage = __webpack_require__(130);

var _MainPage2 = _interopRequireDefault(_MainPage);

var _Profile = __webpack_require__(132);

var _Profile2 = _interopRequireDefault(_Profile);

var _store = __webpack_require__(61);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _TopBlock = __webpack_require__(131);

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

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(8);

var _reactRouterDom = __webpack_require__(20);

var _reactRouterRedux = __webpack_require__(26);

var _utils = __webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    popUpOpened: state.reducer.popUpOpened,
    location: state.routing
  };
};

var TopBlock = function TopBlock(props) {

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
          props.dispatch(_utils.actions.openPopUp(_utils.signInPopUp));
        } },
      'Sign in'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement(
        'button',
        { onClick: function onClick(e) {
            props.dispatch((0, _reactRouterRedux.push)('/profile'));
            console.log(props);
          } },
        'Profile'
      )
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
          props.dispatch(_utils.actions.openPopUp(_utils.newsLetterPopUp));
        } },
      'Subscribe'
    )
  );
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(TopBlock);

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

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newsLetterPopUp = exports.signUpPopUp = exports.signInPopUp = exports.actions = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  }
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
          props.dispatch(actions.throwPopUpError('Invalid email address'));
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

var signInForm = function signInForm(props) {
  return _react2.default.createElement(
    'form',
    { onSubmit: function onSubmit(e) {
        e.preventDefault();
        var inputs = e.target.querySelectorAll('input');
        try {
          inputs.forEach(function (val) {
            if (val.value !== 'admin') {
              throw e;
            }
          });
        } catch (e) {
          props.dispatch(actions.throwPopUpError('Invalid login or password'));
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
      props.err ? props.err : null
    ),
    _react2.default.createElement(
      'p',
      null,
      'Or use your FaceBook account to authorize'
    )
  );
};

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
          props.dispatch(actions.openPopUp(btnValue === 'Sign Up' ? signUpPopUp : signInPopUp));
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

var mapStateToProps = function mapStateToProps(state) {
  return {
    title: state.reducer.popUpBody.title,
    btns: state.reducer.popUpBody.btns,
    body: state.reducer.popUpBody.body
  };
};

var mapErrorsToProps = function mapErrorsToProps(state) {
  return {
    err: state.reducer.err
  };
};

signInUpBtns = (0, _reactRedux.connect)(mapStateToProps)(signInUpBtns);
signInForm = (0, _reactRedux.connect)(mapErrorsToProps)(signInForm);
newsLetter = (0, _reactRedux.connect)(mapErrorsToProps)(newsLetter);

var signInPopUp = exports.signInPopUp = {
  btns: signInUpBtns,
  body: signInForm,
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

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configureStore;

var _redux = __webpack_require__(37);

var _reduxThunk = __webpack_require__(121);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reactRouterRedux = __webpack_require__(26);

var _reducers = __webpack_require__(122);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({ reducer: _reducers2.default, routing: _reactRouterRedux.routerReducer });

function configureStore(initialState) {
  var middleware = (0, _redux.applyMiddleware)(_reduxThunk2.default);
  var createStoreWithMiddleware = (0, _redux.compose)(middleware, typeof window !== 'undefined' && window.devToolsExtension ? window.devToolsExtension() : function (f) {
    return f;
  })(_redux.createStore);

  var store = createStoreWithMiddleware(rootReducer, initialState);

  return store;
}

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

var _reactRedux = __webpack_require__(8);

var _reactRouterDom = __webpack_require__(20);

var _reactRouterRedux = __webpack_require__(26);

var _createBrowserHistory = __webpack_require__(45);

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _store = __webpack_require__(61);

var _store2 = _interopRequireDefault(_store);

__webpack_require__(123);

var _Header = __webpack_require__(125);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(127);

var _Footer2 = _interopRequireDefault(_Footer);

var _PopUp = __webpack_require__(128);

var _PopUp2 = _interopRequireDefault(_PopUp);

var _routes = __webpack_require__(129);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var store = (0, _store2.default)({});
var history = (0, _createBrowserHistory2.default)();

var mapStateToProps = function mapStateToProps(state) {
  return {
    popUpOpened: state.reducer.popUpOpened
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