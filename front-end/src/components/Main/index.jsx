import React from 'react'
import styled from 'styled-components'
import CardOption from '../CardOption'
import { FcSearch } from 'react-icons/fc'

const MainStyled = styled.main`
  margin-top: 90px;
  height: 90vh;
  padding: 10px;
  section {
    border: 2px solid black;
    background-color: #ffffff4d;
    border-radius: 6px;
    color: #ffb800;
    width: 90%;
    margin-left: 110px;
    padding: 15px;
    height: 87vh;
    div {
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
  }
`

export default function Main() {
  return <MainStyled>
    <CardOption />
    <section>
      <div>
        <input type="text" placeholder='Search your content' />
        <button>
          <FcSearch className='icon__search'/>
        </button>
      </div>
    </section>
  </MainStyled>
}
