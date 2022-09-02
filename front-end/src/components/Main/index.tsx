import Board from '../Board'
import CardOption from '../CardOption'
import StyleMain from './StyleMain'
import generateData from '../../mock/data'

function Main() {
  const checkedLength = generateData().length > 0
  return (
    <StyleMain>
      {checkedLength && <CardOption />}
      <Board />
    </StyleMain>
  )
}

export default Main;
