import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


class App extends React.Component {

	state = { lat: null, errorMesssage: ''};

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			position => this.setState({lat: position.coords.latitude}),
			err => this.setState({errorMesssage: err.message})
		);	
	}

	componentDidUpdate() {
		console.log('my componnet was just updated')
	}

	render() {
		if(this.state.errorMesssage && !this.state.lat) {

			return <div>Error {this.state.errorMesssage}</div>
		} else if(!this.state.errorMesssage && this.state.lat) {
			return <SeasonDisplay lat={this.state.lat} />

		} else {
		return (
			<Spinner/>
		);
	}
	}
}


ReactDOM.render(
	<App />,
	document.querySelector('#root')
)