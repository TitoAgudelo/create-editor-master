import React, { Component } from 'react';
import './images.css';

class Images extends Component {
	/*componentWillMount () {
		let header = new Headers({
    		'Access-Control-Allow-Origin':'*',
    	});

		return fetch('http://localhost:8000/images/', {method: 'GET', header: header})
      		.then(function(response) {
    			return response.json()
  			})
	}
*/
	render() {
		return (
			<div className="image">
		        <h4>Images</h4>
		        <ul className="list-unstyled">
		            <li><img src="images/sample.jpeg" className="img-rounded" /></li>
		        </ul>
		    </div>
		);
	}
}

export default Images;