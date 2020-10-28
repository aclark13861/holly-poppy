const Poppy = require('../models/poppy');

module.exports = {
    about,
    store,
    newForm,
    create,
    home,
    showMap,
    users,
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
    res.json(req.body);
    console.log(poppy);
    }
  });
}

function showMap(req, res) {
  res.render('map')
}

function users(req, res) {
  let query = Poppy.find({});
  query.exec(function(err, users){
      if(err) res.send(err);
      res.json(users)
  });
};
