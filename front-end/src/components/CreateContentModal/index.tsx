import { useContext } from 'react';
import UserContentContext from '../../context/UserContext';
import changeState from '../../utils/changeState';
import styled from 'styled-components';
import { IoMdClose } from 'react-icons/io';
import {createContent} from '../../helpers/api/request/api';


const FormContainer = styled.form`
display: flex;
flex-direction: column ;
border: 2px solid black;
background-color: #141a29;
color: #ffb800;
border-radius: 6px;
height: 550px;
width: 850px;
padding: 20px;
position: relative;
top: -160%;
left: -20%;

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
    width: 70%;
    margin: 0 auto;
    margin-top: 10px;
    outline-color: #ffb800;
    font-size: 22px;
    padding: 10px;
     &::placeholder{
      font-size: 22px;
      text-transform: none;
    }
  }
}
div {
  display: flex;
  justify-content: flex-end;
  width: 100%;

  button {
    width: 180px;
    border-radius: 6px;
  }
}
`;


function CreateContentModal() {
  const { isModal, setIsModal, content, setContent } = useContext(UserContentContext);
  const { title, body } = content;
  const handleChange = ({ target }: any) => {
    const { name, value } = target;
    setContent({ ...content, [name]: value })
  };

    return (
    <FormContainer>
      <IoMdClose
        className='icon__close'
        onClick={() => changeState(isModal, setIsModal)}
      />
      <form>
        <input
          value={content.title}
          onChange={ handleChange }
          name="title"
          type="text"
          placeholder='Enter the title of your content here'
        />
        <textarea
          value={content.body}
          onChange={ handleChange }
          name="body"
          id=""
          cols={20}
          rows={20}
          placeholder="Insert your content here"
        ></textarea>
      </form>
      <div>
        <button>Clear</button>
        <button onClick={() => createContent(title, body)}>Send</button>
      </div>
    </FormContainer>
  )
}
export default CreateContentModal;
