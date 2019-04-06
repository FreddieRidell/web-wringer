const { parse } = require("url");

const { sites } = require("../webring.json");

module.exports = (req, res) => {
	const toIndex = Math.floor(Math.random() * sites.length);
	const toUrl = sites[toIndex].url;

	res.writeHead(302, {
		Location: toUrl
	});

	res.end();
};
