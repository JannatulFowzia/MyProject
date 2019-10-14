import React, { Component } from 'react'
import logo from '../sigmatechnology_logo_white_500.svg';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';

import MainPage from './MainPage';
import '../App.css';

class LoginPage extends Component {

        handleClick = (event) => {
            ReactDOM.render((

                <BrowserRouter>
                <Route exact path="/" component={MainPage}></Route>
                </BrowserRouter>            
            
            ), document.getElementById('root'));
                      
        }

    render() {
        return ( 






      <div className="App">




     



        <header className="App-header">



          <img src={logo} className="App-logo" alt="logo" />







          <div className="App-intro">



             <input placeholder="UserName"></input><br/>
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