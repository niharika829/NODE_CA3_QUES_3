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
