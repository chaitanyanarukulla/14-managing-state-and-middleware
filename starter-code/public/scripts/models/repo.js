'use strict';
var app = app || {};

(function(module) {
  const repos = {};
  repos.all = [];

  // Done What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  //This function  is making a GET call to the server (proxy will make the same request to Github ) once that is done it will take that data and put it in repos.all[],
  repos.requestRepos = function(callback) {
    $.get('/github/user/repos')
      .then(data => {
        repos.all = data,
          err => {
            console.error(err)
          }
      })
      .then(callback);
  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(app);
