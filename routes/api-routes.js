const Kudo = require('../models/Kudo');
const User = require('../models/User');

module.exports = function(app) {

    app.get('/api/kudos',function(req,res) {
        Kudo.find({}).then(function(data) {
            res.json(data)
        }).catch(function(error) {
            res.json({error:error});
        });
    });

    app.get('/api/users', function(req,res) {
        User.find({}).then(function(data) {
            res.json(data)
        }).catch(function(error) {
            res.json({error:error});
        });
    });

    app.post('/api/kudos', function(req,res) {
        Kudo.create(req.body)
        .then(function(data){
            res.json(data)
        })
        .catch(function(error) {
            res.json({error:error});
        });
    });

    app.post('/api/users', function(req,res) {
        User.create(req.body)
        .then(function(data){
            res.json(data)
        })
        .catch(function(error) {
            res.json({error:error});
        });
    });
}