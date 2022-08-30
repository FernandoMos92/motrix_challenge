import styled from 'styled-components'

const BoardStyled = styled.section`
  background-color: #ffffff4d;
  border-radius: 6px;
  color: #ffb800;
  width: 90%;
  margin-top: 20px;
  margin-left: 110px;
  padding: 15px;
  height: 87vh;
  .card__search {
    display: flex;
    justify-content: center;

    input {
      height: 40px;
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
      padding: 5px;
      width: 350px;
      outline-color: #ffb800;
      user-select: none;

      ::placeholder {
        letter-spacing: 2.2px;
      }
    }
    button {
      width: 50px;
      cursor: pointer;
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;

      .icon__search {
        font-size: 22px;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    section {
      width: 80%;
    }
  }
`

export default BoardStyled