import React, { Component } from 'react';
import './upload.css';

class Upload extends Component {

	constructor(props) {
        super(props)
        this.state = {file: '',imagePreviewUrl: ''};
    }

    _handleImageChange(e) {
    	e.preventDefault();

    	let reader = new FileReader();
    	let file = e.target.files[0];

    	reader.onloadend = () => {
      		this.setState({
        		file: file,
        		imagePreviewUrl: reader.result
      		});
    	}

    	reader.readAsDataURL(file)
  	}

	_handleSubmit (e) {
		var self = this;
		e.preventDefault();
    	// TODO: do something with -> this.state.file
    	console.log('handle uploading-', this.state.file);
		return fetch('http://localhost:8000/uploads/', {method: 'POST', file: this.state.file })
      		.then(function(response) {
    			return response.json()
  			})
  			.then(function(upload) {
		  		self.setState({ upload: upload })
			});
	}

	render() {
		return (
			<div className="form">
			    <h3>Form</h3>
	      		<input type="file" className="form-control" placeholder="Upload Your Images" name="upload" onChange={(e)=>this._handleImageChange(e)} />
		      	<button id="submit" className="btn btn-default" onClick={(e)=>this._handleSubmit(e)}>upload</button>
		  	</div>
		);
	}
}

export default Upload;