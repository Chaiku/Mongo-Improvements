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
    User.create(req.body)
      .then(function(data) {
        res.json(data);
      })
      .catch(function(error) {
        res.json({ error: error });
      });
  });
};
