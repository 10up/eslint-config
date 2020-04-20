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
	const props = {
		episodeOne: 'The Phantom Menace',
		episodeTwo: 'Attack of the Clones',
		episodeThree: 'Revenge of the Sith',
	};

	return <StarWars {...props} />;
};
