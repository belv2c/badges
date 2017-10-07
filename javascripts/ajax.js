"use strict";

let dom = require('./dom');

let treehouseData = [];

const loadTreehouse = () => {
	$.ajax(`https://teamtreehouse.com/brookelewis.json`).done((data) => {
		treehouseData = data.badges;
		console.log(treehouseData);
		dom.buildDomString(treehouseData);
	}).fail((error) => {
		return treehouseData;
	});
};

const getTreehouseData = () => {
	return treehouseData;
};

module.exports = {loadTreehouse, getTreehouseData};