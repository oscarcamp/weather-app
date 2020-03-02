import React from 'react';
import SearchCity from './components/SearchCity';
import WeatherReport from './components/WeatherReport';
import Axios from 'axios';

class App extends React.Component {
	state = {
		errorMessage: false,
		report: null,
	}

	componentDidMount(){
		Axios.get('https://api.openweathermap.org/data/2.5/weather?q=Lund&units=metric&appid=bbe30c9311e98e6fa36235bc85bcbc36')
		.then(Response => {
			console.log(Response)
		})
		.catch(err => {
			console.error(err)
		});
	}

	render() {
		return (
			<div id="app">
				<div className="container my-5">
					<h1 className="text-center mb-5">
						<span role="img" aria-label="Weather?">🌦❔</span>
					</h1>

					<SearchCity />

					{
						this.state.report
						? (
							<WeatherReport />
						)
						: ''
					}
				</div>
			</div>
		)
	}
}

export default App;
