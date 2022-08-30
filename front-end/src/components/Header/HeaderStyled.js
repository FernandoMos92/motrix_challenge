import styled from 'styled-components'

export const HeaderStyled = styled.header`
  align-items: center;
  box-shadow: 1px 0 2px #f2f2f2;
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

  @media screen and (max-width: 425px) {
    img {
      width: 80px;
    }

    h3 {
      font-size: 16px;
    }
  }
`
