"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var FormattedDate = function FormattedDate(props) {
  var formatDate = function formatDate(ISODateTime) {
    var date = new Date(ISODateTime);
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
    return monthNames[monthIndex] + ' ' + day + ', ' + year;
  };

  return React.createElement("span", null, formatDate(props.isoDate));
};

var Project = function Project(props) {
  var project = props.project;
  var repoLangColorList = {
    "HTML": "#e34c26",
    "CSS": "#563d7c",
    "JavaScript": "#f1e05a"
  };

  var getRepoLangColor = function getRepoLangColor(lang) {
    return {
      'backgroundColor': repoLangColorList[lang]
    };
  };

  return React.createElement("li", null, React.createElement("h2", null, React.createElement("a", {
    href: project.homepage
  }, " ", project.projectName)), React.createElement("p", null, project.projectDescription), React.createElement("details", null, React.createElement("summary", null, "Click to read more..."), React.createElement("p", null, project.details)), React.createElement("aside", {
    className: "project-details ".concat(props.apiData ? 'visible' : 'hidden', " ")
  }, "Updated: ", React.createElement(FormattedDate, {
    apiData: props.apiData,
    isoDate: project.updated_at
  }), React.createElement("span", {
    className: "repo-lang-wrapper"
  }, React.createElement("span", {
    className: "repo-lang-icon",
    style: getRepoLangColor(project.language)
  }), " ", project.language, " ")));
};

var ListControls =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ListControls, _React$Component);

  function ListControls(props) {
    _classCallCheck(this, ListControls);

    return _possibleConstructorReturn(this, _getPrototypeOf(ListControls).call(this));
  }

  _createClass(ListControls, [{
    key: "_handleChange",
    value: function _handleChange() {
      console.log("Element has changed");
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return React.createElement("div", {
        className: "list-controls"
      }, "Sort by: ", React.createElement("select", {
        name: "project-order",
        id: "project_order",
        onChange: function onChange(event) {
          return _this.props.reorderList(event);
        }
      }, React.createElement("option", {
        value: "newest-first"
      }, "Newest First"), React.createElement("option", {
        value: "oldest-first"
      }, "Oldest First")));
    }
  }]);

  return ListControls;
}(React.Component);

var ProjectList =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(ProjectList, _React$Component2);

  function ProjectList(props) {
    var _this2;

    _classCallCheck(this, ProjectList);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(ProjectList).call(this, props));
    _this2.state = {
      apiData: false,
      projects: [{
        projectName: "Caeser Cipher",
        id: 183995858,
        homepage: "https://johnjordan1985.github.io/caesar-cipher/",
        details: "Includes some of the history behind encryption, beginning with the illustrious Julius Caeser, and allows the user to encrypt and decrypt short text-based messages.",
        projectDescription: "A fully functional attempt to explain Public Key Encryption, which is the basis of most of the secure communication over the internet."
      }, {
        projectName: "FizzBuzz",
        id: 182310084,
        homepage: "https://johnjordan1985.github.io/fizzbuzz/",
        details: "I didn't know what 'FizzBuzz' was, but after having it explained to me, I challenged myself to solve it using CSS3 alone: I simultaneously solved it using JavaScript, for comparison. The retro 90's eyeball-bleeding appearance is a bit of an in-joke...",
        projectDescription: "After suggesting the 'nth-child' CSS selector to solve a front-end issue for a DevOps colleague, they mused that you could use CSS to solve the 'FizzBuzz' challenge. "
      }, {
        projectName: "Revamped Confetti",
        id: 133503450,
        homepage: "https://johnjordan1985.github.io/revamped-confetti/",
        details: "Returned to this project to apply my learnings in typography, color theory and content writing, as well as to test out the newly stable Bootstrap 4 framework (the original project had used Bootstrap 3).",
        projectDescription: "An update of a university project, where I had to design a landing page for a \"full spectrum\" wedding service called \"Ready Confetti\" "
      }, {
        projectName: "List-O-Rama",
        id: 96696380,
        homepage: "https://johnjordan1985.github.io/revamped-confetti/",
        details: "A straight-forward \"To-Do List\" application, which uses localStorage to store user input and allow use offline.",
        projectDescription: "A university project to build a simple jQuery \"To-Do List\" application."
      }, {
        projectName: "Galway Pub Finder",
        id: 66479971,
        homepage: "https://johnjordan1985.github.io/Galway-Pub-Finder/",
        details: "My first web application. It was fun to build, but not so fun to use: it doesn't display well on mobile, and only displays a fraction of the pubs in my hometown. Not that pubs are hard to find in my hometown or anything...",
        projectDescription: "A project to build a web application using knockout.js, which integrated with Google Maps and the Yelp API, to display letious pubs on a map."
      }]
    };
    _this2._isMounted = false;
    _this2._sortingKey;
    return _this2;
  }

  _createClass(ProjectList, [{
    key: "_mergeLists",
    value: function _mergeLists(listAPI, list) {
      var l = list.length; // Sorts arrays, so they match up for merge within for loop

      listAPI.sort(function (a, b) {
        return b.id - a.id;
      });
      list.sort(function (a, b) {
        return b.id - a.id;
      });

      for (var i = 0; i < l; i++) {
        listAPI[i] = Object.assign(listAPI[i], list[i]);
      }

      return listAPI;
    }
  }, {
    key: "_isListedRepo",
    value: function _isListedRepo(repoId, repoList) {
      var l = repoList.length;

      for (var i = 0; i < l; i++) {
        if (repoList[i].id === repoId) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: "_sortingFunction",
    value: function _sortingFunction(a, b) {
      console.log("sorting function called");

      if (this._sortingKey === "oldest-first") {
        return new Date(a.created_at) - new Date(b.created_at);
      }

      return new Date(b.created_at) - new Date(a.created_at);
    }
  }, {
    key: "_reorderList",
    value: function _reorderList(event) {
      this._sortingKey = event.currentTarget.value;
      console.log(event); //'created_at' and 'updated_at' are properties of each project object, which can be used for targeting

      this.setState({
        projects: this.state.projects.sort(this._sortingFunction.bind(this))
      });
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this3 = this;

      this._isMounted = true;
      var listedRepoListFromAPI;
      var decoratedListedRepos;
      var allRepos = fetch("https://api.github.com/users/JohnJordan1985/repos?&per_page=100").then(function (results) {
        return results.json();
      }).then(function (data) {
        listedRepoListFromAPI = data.filter(function (repo) {
          return _this3._isListedRepo(repo.id, _this3.state.projects);
        });

        var decoratedListedRepos = _this3._mergeLists(listedRepoListFromAPI, _this3.state.projects); // watch order of arguments, want repoAPI data to be over-written !!


        if (_this3._isMounted) {
          _this3.setState({
            apiData: true,
            projects: decoratedListedRepos
          });
        }
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._isMounted = false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return React.createElement("div", null, React.createElement(ListControls, {
        reorderList: this._reorderList.bind(this)
      }), React.createElement("ul", {
        className: "project-list"
      }, this.state.projects.map(function (project, index) {
        return React.createElement(Project, {
          project: project,
          key: index,
          apiData: _this4.state.apiData
        });
      })));
    }
  }]);

  return ProjectList;
}(React.Component);

ReactDOM.render(React.createElement(ProjectList, null), document.getElementById("projectList_wrapper"));