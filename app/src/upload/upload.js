import React, { Component } from 'react';
import './upload.css';

class Upload extends Component {

	render() {
		return (
			<div className="form">
			    <h3>Form</h3>
	      		<input type="file" className="form-control" placeholder="Upload Your Images" name="upload" />
		      	<button id="submit" className="btn btn-default">upload</button>
		  	</div>
		);
	}
}

export default Upload;