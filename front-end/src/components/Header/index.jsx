import React from 'react'
import montrix from '../../assets/montrix.png'
import { HeaderStyled } from './HeaderStyled'

export default function Header() {
  return <HeaderStyled>
    <img src={montrix} alt="" />
    <h3>Developer - <span>Fernando Mós</span></h3>

  </HeaderStyled>
}
