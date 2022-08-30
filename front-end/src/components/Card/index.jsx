import React from 'react'
import data from '../../mock/data'
import NoContent from '../NoContent'
import CardStyled from './CardStyled'

export default function Card() {
  return (
    <CardStyled className='card__board'>
      {data.length > 0 ? (
        data.map(({ title, body }) => (
          <div className='card___content'>
            <h2>{title}</h2>
            <span>{body}</span>
          </div>
        ))
      ) : (
        <NoContent />
      )}
    </CardStyled>
  )
}
