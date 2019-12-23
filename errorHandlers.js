// Error handler for handling non-existent routes
const errorHandler404 = ((req, res, next) => {
    console.log('Handling 404 error');
    const err = new Error('err');
    err.status = 404;
    err.message = 'Oopsie!  This page does not exist!';
    next(err);
  });
  
  // Global error handler
 const handleGlobalError = ((err, req, res, next) => {
    res.locals.error = err
    res.render('error', err);
  });

  module.exports = {errorHandler404, handleGlobalError};