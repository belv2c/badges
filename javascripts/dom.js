"use strict";

const buildDomString = (treehouseData) => {
	let domString = '';
	treehouseData.forEach((badges) => {
		domString += `<div>`;
		domString += 	`<img src=${badges.icon_url}>`;
		domString += `</div>`;
	});
	printDomString(domString);
};

const printDomString = (string) => {
	$('#badgeContainer').html(string);
};

module.exports = {buildDomString};