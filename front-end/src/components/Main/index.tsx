import { useContext } from 'react';
import Board from '../Board';
import CardOption from '../CardOption';
import StyleMain from './StyleMain';
import UserContentContext from '../../context/UserContext';

function Main() {
  const { listOfContent } = useContext(UserContentContext)
  const checkedLength = listOfContent.length > 0
  return (
    <StyleMain>
      {checkedLength && <CardOption />}
      <Board />
    </StyleMain>
  )
}

export default Main;
