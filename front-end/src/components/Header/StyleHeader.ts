import styled from 'styled-components'

const StyleHeader = styled.header`
  background-color: #141a29;
  color: #ffffff;
  align-items: center;
  display: flex;
  height: 10vh;
  justify-content: space-around;
  padding: 20px;
  position: fixed;
  top: 0;
  user-select: none;
  width: 100%;
  z-index: 99;

  img {
    align-items: center;
    width: 150px;
  }

  h3 {
    span {
      color: #ffb800;
    }
  }
`

export default StyleHeader
