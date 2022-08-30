import React from 'react'
import SearchStyled from './SearchStyled'

export default function Search() {
  return (
    <SearchStyled>
      <input type='text' placeholder='Search your content' />
      <button>Search</button>
    </SearchStyled>
  )
}
