import React from 'react'
import Card from '../Card'
import Search from '../Search'
import StyleBoard from './StyleBoard'

export default function Board () {
  return (
    <StyleBoard>
      <Search />
      <Card />
    </StyleBoard>
  )
}
