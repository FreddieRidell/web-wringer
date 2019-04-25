const { parse } = require("url");

const { sites } = require("../webring.json");

module.exports = (req, res) => {
	const { hostname } = parse(req.headers.referer);

	const fromIndex = sites.findIndex(({ url }) => {
		return parse(url).hostname === hostname;
	});

	const toIndex = ( sites.length + fromIndex - 1 ) % sites.length;
	const toUrl = sites[toIndex].url;

	res.writeHead(302, {
		Location: toUrl
	});
	res.end();
};
