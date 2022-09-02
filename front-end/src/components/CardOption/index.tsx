import { useContext } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import StyleOption from './StyleOption';
import UserContentContext from '../../context/UserContext';
import changeState from '../../utils/changeState';

export default function CardOption() {
  const { isModal, setIsModal } = useContext(UserContentContext)
  return (
    <StyleOption
      onClick={ () => changeState(isModal, setIsModal)}
    >
      <abbr title="Create new content">
        <BsPlusLg
          className="icon-options"
        />
      </abbr>
    </StyleOption>
  )
}
