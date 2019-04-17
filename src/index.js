import React from 'react';
import ReactDOM from 'react-dom';



class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = { lat: 40, errorMesssage: ''};

		window.navigator.geolocation.getCurrentPosition(
			position => {
				this.setState({lat: position.coords.latitude});
			},
			err => {
				this.setState({errorMesssage: err.message})
			}

		);
	}

	render() {
		if(this.state.errorMesssage && !this.state.lat) {
			return <div>Error {this.state.errorMesssage}</div>
		} else if(!this.state.errorMesssage && this.state.lat) {
			return <div>Latitude: {this.state.lat}</div>

		} else {

		return (
			<div>
				Loading
			</div>
		);
	}
	}
}


ReactDOM.render(
	<App />,
	document.querySelector('#root')
)