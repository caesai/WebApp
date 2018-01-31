# Web Application

### TravisCI
[![Build Status](https://travis-ci.org/caesai/WebApp.svg?branch=master)](https://github.com/caesai/WebApp/)

WebApp is a JavaScript application written with React framework.

Working example is running on http://arbooze.ru

# Repository structure
1. /src - frontend sources (Web Application Code)
2. /webpack - config folder for webpack
3. /server - config folder for server side on express.js

# Development setup
To set up application and run it locally:

1. install all node dependencies
```
npm install
```
2. compile web app
```
npm run build
```
These commands will run webpack to build source code. After build complete run:

```
npm run server
```
This will launch server on http://localhost:3000
