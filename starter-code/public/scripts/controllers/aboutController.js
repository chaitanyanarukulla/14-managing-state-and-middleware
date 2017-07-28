'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  // Done: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // (put your response in a comment here)
  //This is calling  aboutController which is controlling the tab contents in index page with the id of #about and hides all its siblings.

  aboutController.index = () => {
    $('#about').show().siblings().hide();
    app.repos.requestRepos(app.repoView.index);
  };

  module.aboutController = aboutController;
})(app);
