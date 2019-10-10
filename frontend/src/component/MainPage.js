import React, { Component } from 'react'


//this should autodirect to LoginPage if you're not logged in.. not sure how.
class MainPage extends Component {
    
    render() {
        
       return (
           
         <div>
            <h1>Home...</h1>
            <input placeholder="Import your File here"></input><br/>
            <button>Browse</button>
         </div>
      )

    }
}

export default MainPage