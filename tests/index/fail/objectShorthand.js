/* eslint-disable no-unused-vars */

const atom = {
	value: 1,

	addValue: function (value) {
		return atom.value + value;
	},
};

const anakinSkywalker = 'Anakin Skywalker';
const lukeSkywalker = 'Luke Skywalker';

const obj1 = {
	lukeSkywalker: lukeSkywalker,
};

const obj2 = {
	episodeOne: 1,
	twoJediWalkIntoACantina: 2,
	lukeSkywalker,
	episodeThree: 3,
	mayTheFourth: 4,
	anakinSkywalker,
};
