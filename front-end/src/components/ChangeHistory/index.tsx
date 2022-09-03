import { useContext } from 'react';
import UserContentContext from '../../context/UserContext';
import styled from 'styled-components'

const History = styled.div`
  border: 2px soldi black;
  background-color: #141a29;
  position: absolute;
  top: 0;
  width: 100%;
  left: 0;
  height: 100%;
  padding: 10px;
`

function ChangeHistory() {
  const {history} = useContext(UserContentContext)
  return (
    <History>
      {
      }
    </History>
  )
}

export default ChangeHistory;