import React from 'react'
import generateData from '../../mock/data'
import NoContent from '../NoContent'
import StyleCard from './StyleCard'

export default function Card () {
  return (
    <StyleCard className="card__board">
      {generateData().length > 0
        ? (
            generateData().map((content, index:number) => (
              <div key={ index } className="cardStyle___content">
            <h2 className="cardStyle___content-title">{content.title}</h2>
            <span className="cardStyle___content-body">{content.body}</span>
          </div>
            ))
          )
        : (
        <NoContent />
          )}
    </StyleCard>
  )
}
