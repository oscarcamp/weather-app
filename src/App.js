import React from 'react';
import SearchCity from './components/SearchCity';
import WeatherReport from './components/WeatherReport';
import axios from 'axios';

class App extends React.Component {
	state = {
		report: null,
	}


	handleSearch = city => {

		axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=a9f6719e37f20890ebff5d91724dec1f`)
		.then(response => {
			this.setState({
				report: response.data,
			});
		})
		.catch(err => {
			console.error(err);
		});
	}
	

	render() {
		return (
			<div id="app">
				<div className="container my-5">
					<h1 className="text-center mb-5">
						<span role="img" aria-label="Weather?">🌦❔</span>
					</h1>

					<SearchCity 
						OnSearch={this.handleSearch}
					/>

					{
						this.state.report
						? (
							<WeatherReport report={this.state.report}/>
						)
						: ''
					}
				</div>
			</div>
		)
	}
}

export default App;
