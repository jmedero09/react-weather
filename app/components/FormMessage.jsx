var React = require('react');

var FormMessage = (props) => {
	return(
		//our form is going to get passes a location and temp property
		<h2 className="text-center">The weather in {props.location} is {props.temp}</h2>
	)	
}
module.exports = FormMessage;