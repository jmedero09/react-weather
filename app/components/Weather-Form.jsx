var React = require('react');


var WeatherFrom = React.createClass({
	//an on submit function 
	onFormSubmit:function(e){

		e.preventDefault();

		var location = this.refs.location.value;

		if(location.length > 0){

			//clears out the form
			this.refs.location.value = "";

			this.props.onSearch(location);
		}
	},

	render:function(){
		return(
			<div>
				<form onSubmit={this.onFormSubmit}>
					<input ref="location" type="text"/>
					<button className="button expanded hollow">Get Weather</button>
				</form>
			</div>		

		)
	}
});	
module.exports = WeatherFrom;