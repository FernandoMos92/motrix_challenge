import React from 'react'
import Card from '../Card'
import BoardStyled from './BoardStyled'

export default function Board() {
  return (
    <BoardStyled>
      <div className='card__search'>
        <input type='text' placeholder='Search your content' />
        <button>
        </button>
      </div>
      <Card />
    </BoardStyled>
  )
}
