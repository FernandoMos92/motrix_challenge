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
    transition: all 0.1s ease-in-out;

    &:active {
      transform: scale(0.9);
    }
  }

  .details__history {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 94%;
    margin: 0 auto;
    margin-left: 10px;
    position: relative;

    button {
      background-color: #ffb800;
      border: 1px solid #ffb800;
      cursor: pointer;
      color: #141a29;
      border-radius: 6px;
      font-weight: 600;
      font-size: 18px;
      width: 140px;
      height: 30px;
      transition: all .1s ease-in-out;
      position: absolute;
      bottom: 0;
      right: 0;
      &:active {
        transform: scale(.9);
      }
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

    .card__edit-icon {
      margin-left: 20px;
      font-size: 28px;
      color: #ffb800;
      cursor: pointer;
    }

    .details__body {
      height: 30vh;
      padding: 10px;
      margin-bottom: 25px;
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
    }

    .details__date {
      width: 40%;
      height: fit-content;
      p {
        margin-bottom: 15px;
      }
    }

    .default__edit {
      display: block;
      background-color: #F2F2F2;
      outline-color: #ffb800;
      margin: 0 auto;
      border-radius: 8px;
    }

    .details__input-edit {
      font-size: 18px;
      width: 70%;
      height: 40px;
      padding: 5px;
    }

    .details__text-edit {
      margin-top: 20px;
      margin-bottom: 30px;
      max-height: 350px;
      font-size: 18px;
      width: 70%;
      padding: 10px;
    }

    .details__container-buttons {
      display: flex;
      justify-content: space-evenly;
      width: 400px;
      height: 100px;
      position: absolute;
      right: 150px;
      bottom: 50px;
      button {
        background-color: #141a29;
        border: 1px groove #ffb800;
        border-radius: 6px;
        color: #ffb800;
        cursor: pointer;
        font-size: 18px;
        margin-top: 10px;
        height: 40px;
        width: 120px; 
        transition: all .1s ease-in-out;

        &:disabled {
          border-color: gray;
          color: red;
        }

        &:active {
          transform: scale(.9);
        }
      }
    }
  }
`

export default Details
