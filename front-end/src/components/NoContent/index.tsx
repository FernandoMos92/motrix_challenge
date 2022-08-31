import React from 'react'
import { BsPlusLg } from 'react-icons/bs'
import StyleNoContent from './StyleNoContent'


export default function NoContent () {
  return (
    <StyleNoContent>
      <div>
        <h2>Dont contain any content</h2>
        <button>
          <BsPlusLg />
        </button>
      </div>
    </StyleNoContent>
  )
}
