import styled from 'styled-components'

const SearchStyled = styled.div`
    display: flex;
    justify-content: center;

    input {
      height: 40px;
      border: none;
      border-bottom: 1px solid black;
      padding: 5px;
      width: 350px;
      outline-color: #ffb800;
      user-select: none;

      ::placeholder {
        letter-spacing: 2.2px;
      }
    }

    button {
      background-color: #ffb800;
      color: #141a29;
      cursor: pointer;
      font-size: 18px;
      font-weight: 600;
      letter-spacing: 2.2px;
      border: 1px groove black;
      border-radius: 8px;
      margin-left: 10px;
      width: 120px;
      transition: all 0.1s ease-in-out;

      &:active {
        transform: scale(0.8);
      }
    }
`

export default SearchStyled;