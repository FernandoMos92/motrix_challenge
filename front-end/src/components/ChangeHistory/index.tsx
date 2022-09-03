import { useContext, useEffect } from 'react';
import UserContentContext from '../../context/UserContext';
import styled from 'styled-components'
import { getHistories } from '../../helpers/api/request/api';

const History = styled.div`
  border: 2px soldi black;
  background-color: #141a29;
  position: absolute;
  top: 0;
  width: 100%;
  left: 0;
  height: 100%;
  padding: 10px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    background-color: #141a29;
    width: 3px;
    height: 2px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #ffb800;
    border-radius: 20px;
  }

  .history__content-updated {
    height: 15%;
    padding: 15px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
  }

  button {
    position: absolute;
    background-color: #ffb800;
    color: #141a29;
    font-weight: 600;
    border-radius: 6px;
    bottom: 10px;
    left: 45%;
    font-size: 20px;
    width: 140px;
  }

`

function ChangeHistory(props:any) {
  const { history, setHistory } = useContext(UserContentContext)

  const handleHistory = async () => {
    const { data } = await getHistories(props.id)
    setHistory(data)
  }

  useEffect(() => {
    handleHistory()
  }, [])
  
  return (
    <History>
      {
        history.map((data, index) => (
          <div className='history__content-updated'>
            <h3>{`Number update ${index+1}`}</h3>
            <h4>TITLE: {data.title}</h4>
            <p>TEXT: {data.body}</p>
            <p>CREATE AT: { data.createdAt.toString()}</p>
            <hr />
          </div>
        ))
      }
      <button {...props}>
        Cancel
      </button>
    </History>
  )
}

export default ChangeHistory;