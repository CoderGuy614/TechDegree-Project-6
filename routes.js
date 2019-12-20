const express = require('express')
const router = express.Router()
const  { projects }  = require('./data.json')

router.get('/', function (req, res) {
    res.render('index', { projects })
  })

router.get('/about', function (req, res) {
    res.render('about')
  })

  router.get('/projects/:id', function (req, res) {
    const projectId = req.params.id;
    const project = projects.find( ({ id })  => id === +projectId);
    
    if(project){
    res.render('project', { project })
    } else {
        res.sendStatus(404);
    }
  })

module.exports = router;

