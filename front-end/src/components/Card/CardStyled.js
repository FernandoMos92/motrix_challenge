import styled from 'styled-components'

const CardStyled = styled.div`
  display: flex;
  flex-flow: row wrap;
  height: 78vh;
  justify-content: flex-start;
  margin-top: 10px;
  overflow-y: scroll;
  padding: 10px;
  scroll-behavior: smooth;

  ::-webkit-scrollbar {
    background-color: #141a29;
    width: 3px;
    height: 2px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #ffb800;
    border-radius: 20px;
  }

  .cardStyle___content {
    border-radius: 6px;
    box-shadow: 0 0 6px darkgray;
    cursor: pointer;
    height: 40%;
    margin: 20px 80px 40px 0;
    padding: 5px;
    transition: all 0.1s ease-in-out;
    width: 20%;

    .cardStyle___content-title {
      text-align: center;
      text-transform: uppercase;
      margin-bottom: 10px;
    }

    .cardStyle___content-body {
      display: block;
      height: 85%;
      overflow-y: scroll;
      padding: 15px;

      ::-webkit-scrollbar {
        background-color: #141a29;
        height: 2px;
        width: 3px;
      }

      ::-webkit-scrollbar-thumb {
        background-color: #ffb800;
        border-radius: 20px;
      }
    }

    &:hover {
      transform: scale(1.1);
      background-color: #f2f2f2a5;
      color: #141a29;
    }
  }
`

export default CardStyled
