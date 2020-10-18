/*if we are inside this block it means that the name given by the user is 'Amit' which has passed the middleware layer
, now we are going to take the route parameters with the help of 'req.params.city' and 'req.params.phone'
for city and phone number respectively, also the name (key value pair) given by the user has been fetched with the help of 
'req.body.name'...after fetching the required data. the data has been sent in an appended form as a response of the RESTAPI
and the same has been displayed on the console as well*/
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
