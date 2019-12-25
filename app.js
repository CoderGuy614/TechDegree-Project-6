// Importing the components of the app
const express = require("express");
const app = express();
const routes = require('./routes');
const errorHandlers = require('./errorHandlers');
// Setting the view engine to pug
app.set('view engine', 'pug');

// Serving the static files
app.use('/static', express.static('public'));
app.use('/images', express.static('images'));
app.use(routes);
app.use(errorHandlers.errorHandler404);
app.use(errorHandlers.handleGlobalError);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App is running on port ${ PORT }`);
});