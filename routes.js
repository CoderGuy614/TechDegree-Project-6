const express = require('express')
const router = express.Router()
const  data  = require('./data.json')
const projects = data.projects;
console.log(projects)

router.get('/', function (req, res) {
    res.render('index', { projects })
  })

router.get('/about', function (req, res) {
    res.render('about')
  })


module.exports = router;

