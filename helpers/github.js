const request = require('request');
const config = require('../config.js');
const model = require('../database/index.js');

let getReposByUsername = (req, res) => {
  let options = {
    url: `https://api.github.com/users/${req.body.term}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  request(options, (error, response, body) => {
    if (error) {
      res.header(400).send();
    } else {
      let repos = JSON.parse(body);
      for (let element of repos) {
        model.save(element);
      }
      res.header(202).send();
    }
  });
}

let getAllRepos = (req, res) => {
  model.list((err, response) => {
    if (err) {
      res.header(400).send();
    } else {
      let list = [];
      for (let element of response) {
        list.push({
          idrepo: element.idrepo,
          reponame: element.reponame,
          updated_at: element.updated_at,
          fork: element.fork,
          user: element.user,
          avatar_url: element.avatar_url,
          html_url: element.html_url
        });
      }
      list.sort(function(a, b) {
        return b.updated_at - a.updated_at;
      })
      res.header(200).send(list);
    }
  });
}

module.exports.getAllRepos = getAllRepos;
module.exports.getReposByUsername = getReposByUsername;