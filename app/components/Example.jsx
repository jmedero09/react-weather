var React = require('react');
var {Link} = require('react-router');


var Example = (props) =>{
	return(
		<div>
			<h1 className="text-center page-title">Example Component</h1>
			<p>Here are a few example locations to check out</p>

			<ol>
				<li><Link to="/?location=New York">New York, NY</Link></li>
				<li><Link to="/?location=San Juan">San Juan, PR</Link></li>
				<li><Link to="/?location=Ohio">Columbus,Ohio</Link></li>

			</ol>
		</div>

	);
}

module.exports = Example;