const fs = require('fs');
const express = require('express');
const ReactDOMServer = require('react-dom/server');
const App = require('./dist/js/index.server.bundle.js');

const PORT = 3000;

const app = express();
const template = fs.readFileSync('./index.html', 'utf8');

app.use('/dist', express.static(`${__dirname}/dist`));

app.get('*', (req, res) => {

  App.default(req.url).then((reactComponent) => {
    const result = ReactDOMServer.renderToString(reactComponent);
    const html = template.replace('{{thing}}', result);
    res.send(html);
    res.end();
  });
});

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
