import  React, { Component } from 'react';
import UploadFile from './UploadFile';
import logo from '../sigmatechnology_logo_white_500.svg';
import {TerribleDiv,HeaderDiv} from '../Style/BaseStyle';
import Summary from './Summary';
import CoolTabs from 'react-cool-tabs';
import {StyledForm,StyledTextInputPassword,StyledTextInputUsername,StyledSubmitForm,StyledTextArea} from '../Style/LoginPageStyle';
import {UploadDiv, ButtonField} from '../Style/BaseStyle';


//this should autodirect to LoginPage if you're not logged in.. not sure how.
class MainPage extends Component {
     handleClick = (event) => {
        event.preventDefault(); 
        alert("Here");
                      
        }
 
    render() {
        return (
           //this is very temporary just to show how it works :)
           <CoolTabs  style={{ width: 1800, height:  1000, background:  'white' }}
           activeTabStyle={{ background:  'black', color:  'white' }}
	       unActiveTabStyle={{ background:  'white', color:  'black' }}
	       activeLeftTabBorderBottomStyle={{ background:  'white', height:  2 }}
	       activeRightTabBorderBottomStyle={{ background:  'white', height:  2 }}
	       tabsBorderBottomStyle={{ background:  'black', height:  2 }}
	       leftTabTitle={'MyMBP'}
           rightTabTitle={'Leads'}
           contentTransitionStyle={'transform 0.6s ease-in'}
	       borderTransitionStyle={'all 0.6s ease-in'}

 leftContent={
        <TerribleDiv>
           <HeaderDiv> <img src={logo}></img></HeaderDiv>
         <div> <UploadFile/></div>
        
             <div>
       <Summary/>
      </div> 
      </TerribleDiv>}
      rightContent={<TerribleDiv><HeaderDiv><img src={logo}></img></HeaderDiv><UploadDiv/> <StyledSubmitForm>
                 <StyledTextInputUsername  placeholder="UserName"></StyledTextInputUsername>
                  <textarea placeholder="Leads"></textarea><br/>
                  <ButtonField className="btn btn-md btn-secondary btn-block" type = "submit" onClick={(event) =>this.handleClick(event)}>Submit</ButtonField>
                 </StyledSubmitForm></TerribleDiv>}/>
      
        );
    }
}



export default MainPage