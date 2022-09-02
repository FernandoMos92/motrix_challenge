import styled from 'styled-components'

const StyleCard = styled.div`
  display: flex;
  flex-flow: row wrap;
  height: 70vh;
  justify-content: flex-start;
  margin-top: 10px;
  overflow-y: scroll;
  padding: 10px;
  scroll-behavior: smooth;
  position: relative;

  ::-webkit-scrollbar {
    background-color: #141a29;
    width: 3px;
    height: 2px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #ffb800;
    border-radius: 20px;
  }

  .card__content {
    background-color: #141a29;
    box-shadow: 0px 0px 8px 2px gray;
    color: #F2F2F2;
    max-width: 600px;
    border-radius: 6px;
    height: 400px;
    width: 500px;
    margin-right: 40px;
    padding: 10px;
    user-select: none;
    position: relative;
    
  }

  .card___content-title {
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  .card___content-body {
    height: 300px;
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

  .card___container-button {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    margin-top: 5px;
    height: 40px;
    padding: 3px;
    position: absolute;
    bottom: 5%;
    width: 80%;
    left: 10%;

    button {
      cursor: pointer;
      width: 90px;
      border-radius: 6px;
      background-color: #ffb800;
      font-weight: 600;
      font-size: 18px;
    }
  }
`

export default StyleCard
