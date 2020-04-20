/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */

const StarWars = (props) => {
	const { episodeOne, episodeTwo, episodeThree } = props;

	return (
		<>
			<p>Episode 1: `${episodeOne}`</p>
			<p>Episode 2: `${episodeTwo}`</p>
			<p>Episode 3: `${episodeThree}`</p>
		</>
	);
};

const Display = () => {
	const episodeOne = 'The Phantom Menace';
	const episodeTwo = 'Attack of the Clones';
	const episodeThree = 'Revenge of the Sith';

	return <StarWars episodeOne episodeTwo episodeThree />;
};
