/*here inside the if condition we are first checking if the name given by the user is equal to 'Amit' ,
if yes then go to the controller and if not then change the status code to 404 and send an error message.*/
module.exports = {
	ensureAdmin: function (req, res, next) {
		if (req.body.name === 'Amit') {
			return next();
		} else {
			res.statusCode = 404;
			res.send('error displaying response ');
		}
	},
};
