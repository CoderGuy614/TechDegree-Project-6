// Importing express and the data file
const express = require("express");
const router = express.Router();
const { projects } = require("./datarev.json");
//Renders the index page
router.get("/", function(req, res) {
  res.render("index", { projects: projects.reverse() });
});
// Renders the about page template
router.get("/about", function(req, res) {
  res.render("about");
});
// Renders the pug template for each project
router.get("/projects/:id", function(req, res) {
  const projectId = req.params.id;
  const project = projects.find(({ id }) => id === +projectId);

  if (project) {
    res.render("project", { project });
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;
