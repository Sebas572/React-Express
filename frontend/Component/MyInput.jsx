import React from 'react';

class MyInput extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			output: ''
		};

		this.inputRef = React.createRef();

    	this.handleChange = this.handleChange.bind(this);
    	this.hadleSubmit = this.hadleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({
			output: event.target.value
		});
	}

	hadleSubmit(event) {
		alert(`You wrote this: ${this.inputRef.current.value}`);
	}

	render() {
		return (
			<React.StrictMode>
				<p>You input is:{this.state.output}</p>
				<input type="text" onChange={this.handleChange} ref={this.inputRef}/>
				<input type="submit" onClick={this.hadleSubmit} />
			</React.StrictMode>
		)
	}
}

module.exports = MyInput;