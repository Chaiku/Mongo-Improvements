const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('./public'));

mongoose.connect('mongodb://localhost/tinyImprovements', { useNewUrlParser: true });

require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);

app.listen(PORT, function() {
    console.log(`App is listening on Port ${PORT}`);
    });

