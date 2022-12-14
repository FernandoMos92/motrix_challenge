import {useContext} from 'react'
import { BsPlusLg } from 'react-icons/bs'
import StyleNoContent from './StyleNoContent'
import UserContentContext from '../../context/UserContext'
import changeState from '../../utils/changeState'

function NoContent() {
  const { isModal, setIsModal } = useContext(UserContentContext)
  return (
    <StyleNoContent>
      <div>
        <h2>Dont contain any content</h2>
        <button onClick={() => changeState(isModal, setIsModal)}>
          <BsPlusLg />
        </button>
      </div>
    </StyleNoContent>
  )
}

export default NoContent;
