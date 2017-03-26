import React, { Component } from 'react';
import './text.css';

class Text extends Component {

	render() {
		return (
		    <div className="text">
		        <h4>Text</h4>
		        <button id="addText" className="btn btn-default">Add Text</button>
		    </div>
		);
	}
}

export default Text;