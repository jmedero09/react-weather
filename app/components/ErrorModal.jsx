	var React = require('react');

	var ErrorModal = React.createClass({
		//setting the default props of our error title
		getDefaultProps:function(){
			return{
				title:'error'
			};
		},
		componentDidMount:function(){
			var modal = new Foundation.Reveal($('#error-modal'));
			modal.open();
		},
		//this is our modal
		render:function(props){
		var{title, message} = this.props
		return(
			<div id="error-modal" className="reveal tiny text-center" data-reveal="">
				<h4>{title}</h4>
				<p>
					{message}
				</p>
				<p>
					<button className="button hollow" data-close="">
					OKAY
					</button>
				</p>

			</div>
		);
	}

	});

	module.exports = ErrorModal;