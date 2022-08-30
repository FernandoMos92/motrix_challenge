import React from 'react'
import Card from '../Card'
import Search from '../Search'
import BoardStyled from './BoardStyled'

export default function Board() {
  return (
    <BoardStyled>
      <Search />
      <Card />
    </BoardStyled>
  )
}
