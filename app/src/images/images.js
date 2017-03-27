import React, { Component } from 'react';
import './images.css';

class Images extends Component {

	constructor(props) {
        super(props)
        this.state = { images: [] }
    }

	componentWillMount () {
		var self = this;
		return fetch('http://localhost:8000/images/', {method: 'GET'})
      		.then(function(response) {
    			return response.json()
  			})
  			.then(function(imagesList) {
		  		self.setState({ images: imagesList })
			});
	}

	render() {
		if (this.state.images.length > 0) {
	      	return (
	        	<div className="image">
	        		<h4>Images</h4>
	        		<ul className="list-unstyled">
	        			{
				            this.state.images.map((image, index) => {
				              	return <li><img src={image} key={index} className="img-rounded" /></li>
				            })
			          	}
	        		</ul>
	        	</div>
	      	);
	    } else {
	      	return <div className="image">Loading images...</div>;
	    }
		
	}
}

export default Images;