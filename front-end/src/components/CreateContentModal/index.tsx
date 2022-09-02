import { useContext } from 'react';
import UserContentContext from '../../context/UserContext';
import changeState from '../../utils/changeState';
import { IoMdClose } from 'react-icons/io';
import {createContent} from '../../helpers/api/request/api';
import FormContainer from './FormContainer';

function CreateContentModal() {
  const { isModal, setIsModal, content, setContent } = useContext(UserContentContext);
  const { title, body } = content;
  
  const handleChange = ({ target }: any) => {
    const { name, value } = target;
    setContent({ ...content, [name]: value })
  };


  const createdNewContent = (title:string, body:string):void => {
    createContent(title, body)
  }

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
      <div className='formContainer__container-button'>
          <button
            className='formContainer__button'
            onClick={(event) => event.preventDefault()}
          >
            Clear
          </button>
          <button
            className='formContainer__button'
            onClick={() => createdNewContent(title, body)}
            disabled={title.length < 4}
          >
            Send
          </button>
        </div>
    </FormContainer>
  )
}
export default CreateContentModal;
