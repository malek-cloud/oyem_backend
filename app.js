const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const error = require('./controllers/error404');
const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(adminRoutes);
app.use(shopRoutes);
app.use(error.getError);
mongoose.connect("mongodb+srv://malek_01:kisstherain@cluster0.wpkim.mongodb.net/shop?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {
        app.listen(3000);
        console.log('connected to mongoose hamdlh');
    }).catch(err => { console.log(err) });
