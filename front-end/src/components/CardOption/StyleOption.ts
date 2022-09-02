import styled from 'styled-components'

const StyleOption = styled.div`
  background-color: #141a29;
  border-top: 1px solid #f2f2f2;
  border-right: 1px solid #f2f2f2;
  border-bottom: 1px solid #f2f2f2;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 240px;
  flex-flow: column nowrap;
  padding: 10px;
  width: 80px;
  position: absolute;
  top: 40%;
  left: 0;

  abbr {
    background-color: #141a29;
    border-radius: 6px;
    display: flex;
    align-items: center;
    width: 75px;
    justify-content: center;
    height: 100%;
    margin-bottom: 5px;
    cursor: pointer;
    transition: all .2s ease-in-out;

    .icon-options {
      color: #ffb800;;
      font-size: 24px;
      transition: all 0.4s ease-in-out;
      cursor: pointer;
    }

    &:hover {
      background-color: #f2f2f2;
      transform: scale(.8);
    }
  }
`

export default StyleOption