import styled from 'styled-components'

const CardStyled = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  margin-top: 10px;
  height: 78vh;
  padding: 10px;
  overflow-y: scroll;
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

  .card___content {
    box-shadow: 0px 0px 6px darkgray;
    border-radius: 6px;
    height: 30%;
    width: 20%;
    margin-bottom: 40px;
    margin-right: 80px;
    overflow-y: scroll;
    padding: 5px;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    ::-webkit-scrollbar {
      width: 1px;
    }

    h2 {
      text-align: center;
      text-transform: uppercase;
      margin-bottom: 10px;
    }

    span {
      display: block;
      height: 100%;
      padding: 10px;
    }

    &:hover {
      transform: scale(1.1);
      background-color: #f2f2f2a5;
      color: #141a29;
    }
  }
`

export default CardStyled
