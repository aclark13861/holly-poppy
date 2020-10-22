module.exports = {
    about,
    store
  };

  function about(req, res) {
    res.render('about')
}

function store(req, res) {
    res.render('store')
}