import { useContext } from 'react';
import Card from '../Card'
import Search from '../Search'
import StyleBoard from './StyleBoard'
import UserContentContext from '../../context/UserContext';
import CreateContentModal from '../CreateContentModal';

function Board() {
  const { isModal } = useContext(UserContentContext)
  return (
    <StyleBoard>
      {
        isModal && <CreateContentModal />
      }
      <Search />
      <Card />
    </StyleBoard>
  )
}

export default Board;
