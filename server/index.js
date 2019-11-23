const express = require('express');
const bodyParser = require('body-parser');
const helper = require('../helpers/github.js');

let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/repos', function (req, res) {
  helper.getReposByUsername(req, res);
});

app.get('/repos', function (req, res) {
  helper.getAllRepos(req, res);
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

