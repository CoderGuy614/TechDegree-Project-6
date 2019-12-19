// Error handler for handling non-existent routes
const errorHandler404 = ((req, res, next) => {
    console.log('Handling 404 error');
    const err = new Error('err');
    err.status = 404;
    err.message = 'Whoopsie!  This page does not exist!';
    next(err);
  });
  
  // Global error handler
 const handleGlobalError = ((err, req, res, next) => {
    console.log('Handling a global error');
    console.log(err);
    res.locals.message = err.message;
    res.send(err.message);
  });

  module.exports = {errorHandler404, handleGlobalError};