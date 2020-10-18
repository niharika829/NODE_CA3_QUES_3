exports.addcontact = (req, res, next) => {
	console.log(
		'my name is :- ' +
			req.body.name +
			', city is :- ' +
			req.params.city +
			', phone number is :- ' +
			req.params.phone
	);
	res.statusCode = 202;
	res.send(req.body.name + req.params.city + req.params.phone);
};
