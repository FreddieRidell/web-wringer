const fs = require("fs");

const data = JSON.parse(fs.readFileSync("./webring.json", "utf8"));

const renderLink = ({ title, url, description }) => `
			<article>
				<a href="${url}">
					<h2>${title}</h2>
				</a>
				<p>${description}</p>
			</article>
			<hr/>`;

const renderHeader = ({ title, description }) => `
		<header>
			<h1>${title}</h1>
			<p>${description}</pa>
		</header>`;

const renderFooter = ({ maintainer, repo }) => `
		<footer>
			Maintained by <a href="${maintainer.link}">${maintainer.name}</a>
			on <a href="${repo.link}">${repo.name}</a>
		</footer>`;
		

const renderSite = (data) => `
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>${data.title}</title>
		<meta name="description" content="${data.description}" />
		<link rel="stylesheet" type="text/css" href="style.css"/>
	</head>
	<body>
		${renderHeader(data)}
		<main>
			${data.sites.map(renderLink).join("")}
		</main>
		${renderFooter(data)}
	</body>
</html>
`;

	require("mkdirp")("./public", () => {
		const site = renderSite(data);
		console.log(site);
	fs.writeFileSync("./public/index.html", site);
});

