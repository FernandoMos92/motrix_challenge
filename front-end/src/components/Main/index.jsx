import React from 'react'
import Board from '../Board'
import CardOption from '../CardOption'
import MainStyled from './MainStyled'
import data from '../../mock/data'

export default function Main() {
  const checkedLength = data.length > 0;
  return (
    <MainStyled>
      {checkedLength && <CardOption />}
      <Board />
    </MainStyled>
  )
}
