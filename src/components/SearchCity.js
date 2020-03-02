import React from 'react';

class SearchCity extends React.Component {
	state = {
		city: '',
	}

	handleChangeInput = (e) => {

		//console.log("Something changed...", e.target.value);

		this.setState({
			city: e.target.value,
		});

		
	}
	
	handleFormSubmit = e => {
		e.preventDefault();

		this.props.OnSearch(this.state.city);

		this.setState({
			city: '',
		})

		//console.log(this.state.city);
	}



	render() {
		return (
			<div id="SearchCity" className="mb-5">
				<form onSubmit={this.handleFormSubmit}>
					<div className="input-group">
						<input 
						type="text" className="form-control form-control-lg" 
						id="city"
						onChange={this.handleChangeInput}
						value={this.state.city} />

						<div className="input-group-append">
							<button 
							type="submit"
							className="btn btn-primary btn-lg"
							
							>Search</button>
						</div>
					</div>
				</form>
			</div>
		)
	}
}

export default SearchCity;
