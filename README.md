# Web Application

### TravisCI
[![Build Status](https://travis-ci.org/caesai/WebApp.svg?branch=master)](https://github.com/caesai/WebApp/)

WebApp is a JavaScript application written with React framework.

Working example is running on http://arbooze.ru

# Repository structure
1. /dist - frontend build directory
2. /src - frontend sources (Web Application Code)

# Development setup
To set up application and run it locally:

1. install all node dependencies
```
npm install
```
2. compile web app
```
npm run dev
```
These commands will delete dist directory and then will run webpack to build source code. After build completed webpack-dev-server will run on http://localhost:8080 where app is running.

To set up application on production server you also need to install all node dependencies with npm install and then run
```
npm run release
```
which compile all static in dist directory, that you can use on your server.
