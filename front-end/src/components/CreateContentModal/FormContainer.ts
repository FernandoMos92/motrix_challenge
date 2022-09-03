import styled from 'styled-components';

const FormContainer = styled.form`
display: flex;
flex-direction: column ;
border: 2px solid black;
background-color: #141a29;
color: #ffb800;
border-radius: 10px;
height: 550px;
width: 850px;
padding: 20px;
position: absolute;
left: 33%;
top: 20%;
z-index: 99;

.icon__close {
  margin-left: 97%;
  font-size: 28px;
  cursor: pointer;
}

form {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  height: 80%;
  margin-top: 10px;

  input {
    background-color: #F2F2F2;
    border-radius: 6px;
    font-size: 22px;
    height: 40px;
    margin: 0 auto;
    width: 70%;
    padding: 5px;
    outline-color: #ffb800;
    padding-left: 20px;
    text-transform: uppercase;

    &::placeholder{
      font-size: 22px;
      text-transform: none;
    }
  }

  textarea{
    background-color: #F2F2F2;
    font-size: 22px;
    margin: 0 auto;
    margin-top: 10px;
    padding: 10px;
    width: 70%;
    ::-webkit-scrollbar {
      background-color: #141a29;
      width: 3px;
      height: 2px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #ffb800;
      border-radius: 20px;
    }
     &::placeholder{
      font-size: 22px;
      text-transform: none;
    }

  }
}
.formContainer__container-button {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 70%;

  .formContainer__button {
    background-color: #141a29;
    border: 1px groove #ffb800;
    border-radius: 6px;
    color: #ffb800;
    cursor: pointer;
    font-size: 18px;
    margin-top: 10px;
    height: 40px;
    width: 180px; 

    &:disabled {
      border-color: darkgray;
      color: #d12004;
    }
  }
}
`;

export default FormContainer;