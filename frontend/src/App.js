import React, { Component } from 'react';


import logo from './sigmatechnology_logo_white_500.svg';

import { BrowserRouter } from 'react-router-dom';


import './App.css';
import MainPage from './component/MainPage';







class App extends Component {



  state = {

addContainer: [],


    isLoading: false,



    greeting: ""



  };


 

constructor(props) {
    
       super(props)
    
      this.setstate = new MainPage();
    
     }




  sayHello = async (event) => {



    event.preventDefault();



    let response = await fetch('MainPage');

alert(response);

   



    this.setState({ response});



  }

  handleClick = (event) => {
   window.open("component/MainPage.js");
 }
 


NavigateActivityFunction = (event) =>{

  alert("Yes Navigating");
  
}



  updateName = (event) => {



    event.preventDefault();



    this.setState({ myapi: event.target.value, isLoading: false });



  }







  render() {



    const { myapi, isLoading } = this.state;







    if (isLoading) {



      return "Loading...";



    }







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







export default App

