import styled from 'styled-components';

const LoginFormDiv = styled.div `
		background-color: #ebe1df;
		padding:15px;
		height:40vh;
`;
const StyledTextInput = styled.input`
	padding:1vh;
`;

const StyledTextInputPassword = styled.input`
padding:1vh;
	border-bottom-left-radius: 1vh;
	border-bottom-right-radius: 1vh;
	margin:1px;
	border: none;
`;

const StyledTextInputUsername = styled.input`
		margin:15px 1px 1px 1px;
		border:none;
		padding:1vh;
		border-top-left-radius: 1vh;
		border-top-right-radius: 1vh;
`;

const StyledForm = styled.form`


background-image: linear-gradient(gray, white);
		border: none;
		display:flex;
		
		color:white;
		flex-direction: column;
		background-color: #c4c2c2;
		padding:5vh;
		border-radius:1vh;
		width:30%;

		`;
		
const StyledSubmitForm = styled.form`


background-image: linear-gradient(white, white);
		border: 1px;
		display:flex;
		
		color:white;
		flex-direction: column;
		background-color: #c4c2c2;
		padding:10vh;
		border-radius:1vh;
		width:30%;

		`;
export {LoginFormDiv, StyledTextInput,StyledForm, StyledTextInputPassword, StyledTextInputUsername,StyledSubmitForm}