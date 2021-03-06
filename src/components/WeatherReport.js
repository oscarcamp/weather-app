import React from 'react';

const WeatherReport = props => {
	return (
		<div id="WeatherReport">
			<div className="card bg-dark text-white">
				<div className="card-body text-center">
					<h5 className="card-title">The temperature in {props.report.name} is {props.report.main.temp} &deg; C right now, with a humidity of {props.report.main.humidity} %.</h5>
				</div>
			</div>
		</div>
	)
}

export default WeatherReport;
