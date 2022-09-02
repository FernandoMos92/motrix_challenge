import { useState, useContext } from 'react';
import UserContentContext from '../../context/UserContext';
import StyleSearch from './StyleSearch'

export default function Search () {
  const [search, setSearch] = useState("")

  const { listOfContent } = useContext(UserContentContext)

  const filteredElements = listOfContent.filter((content) => content.title.includes(search))
  console.log('🚀 -> filteredElements', filteredElements);

  const handleChange = ({ target }: any) => {
    const { name, value } = target;
    setSearch(target.value)
    console.log({ [name]: value})
  };


  return (
    <StyleSearch>
      <input
        value={search}
        name="search"
        type='text'
        placeholder='Search your content'
        onChange={ (evt) => handleChange(evt) }
      />
      <button>Search</button>
    </StyleSearch>
  )
}
