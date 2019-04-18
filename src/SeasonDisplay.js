import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
	summer: {
		text: 'lets hit the beach',
		iconName: 'sun',
	},
	winter: {
		text: 'brr its cold!',
		iconName: 'snowflake'
	}
};

const getSeason = (lat, month) => {
	if(month > 2 && month < 9) {
		return lat > 0 ? 'summer' : 'winter';
	} else {
		return lat > 0 ? 'winter' : 'summer';
	}
}

const SeasonDisplay = (props) => {
	const season = getSeason(props.lat, new Date().getMonth());


	return (
		<div className={`season-display ${season}`}>
		<i className={`${seasonConfig[season].iconName} icon-left icon huge`} />
		<h1>{seasonConfig[season].text}</h1>
		</div>
		)
}

export default SeasonDisplay;