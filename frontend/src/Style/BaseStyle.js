import styled from 'styled-components';

const TerribleDiv = styled.div`
  #background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height:100vh;
  display:block;
  box-sizing: border-box;
  
`;

const UploadDiv = styled.div `
		background-color: #ebe1df;
		padding:10px;
		


`;

const HeaderDiv = styled.div `
		padding: 20px;
		height: 35vh;
  
		


`;

const TextField = styled.input `
font-size: 15px; 
`

const ButtonField = styled.button `
	font-size: 15px; 
	border:none;
	border-radius:3px;
	padding:1vh;
	margin:2px;

`
export {TerribleDiv,UploadDiv,HeaderDiv,TextField,ButtonField}