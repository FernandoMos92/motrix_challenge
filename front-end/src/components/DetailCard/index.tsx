import { useContext } from 'react';
import { GrFormClose } from 'react-icons/gr'
import UserContentContext from '../../context/UserContext';
import styled from 'styled-components'

const Details = styled.div`
  border: 2px solid black;
  background-color: #141a29;
  border-radius: 6px;
  color: #ffb800;
  padding: 20px;
  height: 650px;
  width: 900px;
  position: fixed;
  top: 25%;
  left: 30%;
  z-index: 99;

  .details__icon-close {
    position: absolute;
    background-color: #ffb800;
    border-radius: 50%;
    height: 40px;
    width: 40px;
    top: 2%;
    right: 2%;
    cursor: pointer;
    transition: all .1s ease-in-out;

    &:active {
      transform: scale(.9);
    }
  }

  .details__container-content {
    height: 90%;
    padding: 10px;
    margin-top: 35px;
    user-select: none;

    h1 {
      text-align: center;
      text-transform: uppercase;
      font-size: 48px;
    }

    .details__body {
      height: 80%;
      padding: 10px;
      overflow-y: scroll;
      ::-webkit-scrollbar {
        width: 1px;
      }
    }

    .details__date {
      width:40%;
      height: fit-content;
      p {
        margin-bottom: 15px;
      }
    }
  }
`

function DetailCard() {
  const { filteredContent, setIsOpenModalDetail } = useContext(UserContentContext);

  return (
    <Details>
      <GrFormClose className='details__icon-close' onClick={() => setIsOpenModalDetail(false)} />
      {
        filteredContent.map((content) => (
          <div className='details__container-content'>
            <h1>
              {content.title}
            </h1>
            <div className='details__body'>
              {content.body}
            </div>
            <div className='details__date'>
              <label htmlFor="">Created content in:</label>
              <p>{content.createdAt.toString() }</p>
                <label htmlFor="">Last update content at:</label>
              <p>{ content.updatedAt.toString() }</p>
            </div>
          </div>
        ))
      }
    </Details>
  )
}

export default DetailCard;
