const express = require("express");
const app = express();
const routes = require('./routes');
const errorHandlers = require('./errorHandlers');

app.set('view engine', 'pug');



app.use('/static', express.static('public'));
app.use('/images', express.static('images'));
app.use(routes);
app.use(errorHandlers.errorHandler404);
app.use(errorHandlers.handleGlobalError);




app.listen(3000, () => {
    console.log("The application is running on localhost 3000")
})


