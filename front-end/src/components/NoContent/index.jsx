import React from 'react'
import { BsPlusLg } from 'react-icons/bs'
import styled from 'styled-components'

const NoContentStyled = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;

  div {
    width: 30%;
    height: 20%;
    text-align: center;
    padding: 10px;
    h2 {
      margin-bottom: 10px;
      font-size: 38px;
    }
    button {
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      background-color: #141a29;
      border: 1px groove #ffb800;
      border-radius: 50%;
      font-size: 22px;
      width: 40px;
      height: 40px;
      color: #ffb800;
      cursor: pointer;
      transition: all .1s ease-in-out;

      &:active {
        transform: scale(.8);
      }
    }
  }
`

export default function NoContent() {
  return (
    <NoContentStyled>
      <div>
        <h2>Don't contain any content</h2>
        <button>
          <BsPlusLg />
        </button>
      </div>
    </NoContentStyled>
  )
}
