import styled from 'styled-components'

const CardStyled = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    margin-top: 10px;
    height: 78vh;
    padding: 10px;
    overflow-y: scroll;

    ::-webkit-scrollbar {
      width: 1px;
    }

  .card___content {
    box-shadow: 0px 0px 6px #f2f2f2;
    border-radius: 6px;
    height: 30%;
    width: 30%;
    margin-bottom: 15px;
    margin-right: 30px;
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
