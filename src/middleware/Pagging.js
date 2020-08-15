module.exports = (req, res, next) => {
	var { limit, page } = req.query;

	if (!limit || limit < 1) limit = 25;
	if (!page || page < 1) page = 1;

	req.pagging = { limit: parseInt(limit), offset: parseInt((page - 1) * limit) };
	next();
};
