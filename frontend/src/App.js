import React, { Component } from 'react';

import logo from './sigmatechnology_logo_white_500.svg';

import './App.css';



class App extends Component {

  state = {

    isLoading: false,

    greeting: ""

  };



  sayHello = async (event) => {

    event.preventDefault();

    let response = await fetch('/myapi?name=' + this.state.myapi);

    let body = await response.json();

    this.setState({ myapi: body.name, isLoading: false, isGreetingVisible: '' });

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

            <input onChange={(event) => this.updateName(event)} placeholder="Enter Your Name"></input>

            <button onClick={(event) => this.sayHello(event)}>Please Click Me!</button>



            <h2 style={{ visibility: this.isGreetingVisible }}>Hello {this.state.myapi}</h2>





          </div>



        </header>



      </div>



    );

  }

}



export default App;