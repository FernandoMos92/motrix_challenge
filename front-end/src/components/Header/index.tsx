import React from 'react'
import montrix from '../../assets/montrix.png'
import StyleHeader from './StyleHeader'

export default function Header () {
  return (
    <StyleHeader>
      <img src={montrix} alt="" />
      <h3>Developer - <span>Fernando Mós</span></h3>
    </StyleHeader>
  )
}
