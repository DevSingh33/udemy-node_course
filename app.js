const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//setting the render engine 
app.set('view engine', 'ejs');
app.set('views', 'views'); //location of the render engine files

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorController = require('./controllers/error')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

// .use is a middleware and here all the 404 requests will be passsed through it
app.use(errorController.get404);

app.listen(5000);
