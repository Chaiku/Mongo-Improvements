const Kudo = require("../models/Kudo");
const User = require("../models/User");

module.exports = function(app) {
  app.get("/api/kudo", function(req, res) {
    Kudo.find({})
      .then(function(data) {
        res.json(data);
      })
      .catch(function(error) {
        res.json({ error: error });
      });
  });

  app.get("/api/user", function(req, res) {
    User.find({})
      .then(function(data) {
        res.json(data);
      })
      .catch(function(error) {
        res.json({ error: error });
      });
  });

  app.post("/api/kudo", function(req, res) {
    const newKudo = {
      title: req.body.title,
      body: req.body.body,
      to: req.body.to,
      from: req.body.from
    };
    console.log(newKudo)

    Kudo.create(newKudo)
      .then(function(data) {
        res.json(data);
      })
      .catch(function(error) {
        res.json({ error: error });
      });
  });

  app.post("/api/user", function(req, res) {
    const newUser = {
      username: req.body.username
    };
    
    User.create(newUser)
      .then(function(data) {
        res.json(data);
      })
      .catch(function(error) {
        res.json({ error: error });
      });
  });
};
