import { useState, useContext } from 'react';
import UserContentContext from '../../context/UserContext';
import StyleSearch from './StyleSearch'

export default function Search () {
  const [search, setSearch] = useState("")

  const { listOfContent, setSearchContent } = useContext(UserContentContext)

  const contentSearch = () => {
    const  findContent = listOfContent.filter((content) => content.title.includes(search) || content.body.includes(search))
    setSearchContent(findContent)
  }

  const handleChange = ({ target }: any) => {
    setSearch(target.value)
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
      <button onClick={() => contentSearch() }>Search</button>
    </StyleSearch>
  )
}
