import styled from 'styled-components'

const BoardStyled = styled.section`
  background-color: #ffffff;
  border-radius: 8px;
  color: #141a29;
  width: 90%;
  margin-top: 20px;
  margin-left: 110px;
  padding: 15px;
  height: 87vh;

  @media screen and (max-width: 1024px) {
    section {
      width: 80%;
    }
  }
`

export default BoardStyled