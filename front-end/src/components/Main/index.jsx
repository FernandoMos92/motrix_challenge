import React from 'react'
import Board from '../Board'
import CardOption from '../CardOption'
import MainStyled from './MainStyled'

export default function Main() {
  return (
    <MainStyled>
      <CardOption />
      <Board />
    </MainStyled>
  )
}
