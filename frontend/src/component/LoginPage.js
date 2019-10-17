import React, { Component } from 'react'
import logo from '../sigmatechnology_logo_white_500.svg';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import {TextField,ButtonField} from '../Style/BaseStyle';
import MainPage from './MainPage';
import '../App.css';
import { StyledTextInput,StyledForm,StyledTextInputPassword,StyledTextInputUsername} from '../Style/LoginPageStyle';

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

        



          <img src={logo} className="App-logo" alt="logo" />
          

            
              <StyledForm>
                 <h2 >Please login</h2>
                  <StyledTextInputUsername  placeholder="UserName"></StyledTextInputUsername>
                  <StyledTextInputPassword  placeholder="Password"></StyledTextInputPassword><br/>
                  
                  <ButtonField className="btn btn-md btn-secondary btn-block" type = "submit" onClick={(event) =>this.handleClick(event)}>Login</ButtonField>
                
                  <ButtonField className="btn btn-md btn-secondary btn-block">Forgot Password</ButtonField>
              </StyledForm>
           
            



























      </div>







   
        );
    }
}

export default LoginPage