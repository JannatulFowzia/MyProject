import React, { Component } from 'react'
import logo from '../sigmatechnology_logo_white_500.svg';

import { withRouter } from 'react-router-dom';

import MainPage from './MainPage';
import '../App.css';

class LoginPage extends Component {

        handleClick = (event) => {
            this.props.history.push('MainPage');
        
          //this.context.router.history.push();
          
        }

    render() {
        return ( 






      <div className="App">




     



        <header className="App-header">



          <img src={logo} className="App-logo" alt="logo" />







          <div className="App-intro">



             <input onChange={(event) => this.updateName(event)} placeholder="UserName"></input><br/>
            <input placeholder="Password"></input><br/>

              
        

    

            <button onClick={(event) =>this.handleClick(event)}>Login</button>
           
            <button>Forgot Password</button>

















          </div>







        </header>







      </div>







   
        );
    }
}

export default LoginPage