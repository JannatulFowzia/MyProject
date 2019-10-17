import React from 'react';
import UploadFile from './UploadFile';
import logo from '../sigmatechnology_logo_white_500.svg';
import {TerribleDiv,HeaderDiv} from '../Style/BaseStyle';
import Summary from './Summary';


//this should autodirect to LoginPage if you're not logged in.. not sure how.
class MainPage extends React.Component {
    
 
    render() {
        return (
           //this is very temporary just to show how it works :)
        <TerribleDiv>
           <HeaderDiv> <img src={logo}></img></HeaderDiv>
         <div> <UploadFile/></div>
        
             <div>
       <Summary/>
      </div> 
      </TerribleDiv>
      
        );
    }
}



export default MainPage