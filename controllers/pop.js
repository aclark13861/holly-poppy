const Poppy = require('../models/poppy');

module.exports = {
    about,
    store,
    newForm,
    create,
    home,
    showMap
  };

function home(req, res) {
  res.render('home')
}

  function about(req, res) {
    res.render('about')
}

function store(req, res) {
    res.render('store')
}

function newForm(req, res) {
  res.render('newForm')
}

function create(req, res) {
  const poppy = new Poppy(req.body);
  poppy.save(function(err) {
    if (err) { return err } else {
    res.render('home');
    console.log(poppy);
    }
  });
}

function showMap(req, res) {
  res.render('map')
}