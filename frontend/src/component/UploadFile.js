import React, { Component } from 'react'
import axios from 'axios';

//this should autodirect to LoginPage if you're not logged in.. not sure how.
class UploadFile extends Component {

	constructor(props){
		super()
		this.state = ({
			file: null
		})
	}

	onChange = (event) => {
		this.setState({
			file: event.target.files[0]
		});
	}

	onClick = (event) => {
		event.preventDefault()
		const data = new FormData()
		data.append('file', this.state.file)
			for (var key of data.entries()) {
			console.log(key[0] + ', ' + key[1])
		}
		   
		
		axios.post("http://localhost:8080/myapi", data, {
        })
        .then(res => { 
        	console.log(res)
		})
		.catch(error => {
			console.log(error)
		})
	}
    
    render() {
        
       return (
           
         <div>
			 <form onSubmit={this.onClick}>
            	 <input type="file"  name="file" onChange={this.onChange} ref="test"/>
				 <button type ="submit"> Upload</button>
			 </form>

			

		
         </div>
      )

    }
}

export default UploadFile