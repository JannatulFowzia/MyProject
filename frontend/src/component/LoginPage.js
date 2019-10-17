import React, { Component } from 'react'
import logo from '../sigmatechnology_logo_white_500.svg';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import {TextField,ButtonField} from '../Style/BaseStyle';
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







          <div className="App-header">



             <TextField placeholder="UserName"></TextField>
            <TextField placeholder="Password"></TextField><br/>

              
        

    

            <ButtonField onClick={(event) =>this.handleClick(event)}>Login</ButtonField>
           
            <ButtonField>Forgot Password</ButtonField>

















          </div>







        </header>







      </div>







   
        );
    }
}

export default LoginPage