import { useContext } from 'react'
import NoContent from '../NoContent'
import StyleCard from './StyleCard'
import UserContentContext from '../../context/UserContext'
import DetailCard from '../DetailCard'
import { deleteContent } from '../../helpers/api/request/api'

export default function Card() {
  const {
    listOfContent,
    setFilteredContent,
    setIsOpenModalDetail,
    isOpenModalDetail,
    setListOfContent,
    searchContent
  } = useContext(UserContentContext)

  const isOpenDetails = (event: any) => {
    event?.preventDefault()
    const { id } = event.target;
    const findContentOfList = listOfContent.find(
      content => content.id === Number(id)
    )
    setFilteredContent([findContentOfList])
    setIsOpenModalDetail(true)
  }

  const handleDeleteContent = async (event: any) => {
    const { target } = event;
    const {data} = await deleteContent(target.id)
    setListOfContent(data)
  }

  const checkedContent = () => {
    if (searchContent.length > 0) {
      return searchContent
    }
    return listOfContent;
  }

  return (
    <StyleCard className='card__board'>
      {checkedContent().length > 0 ? (
        checkedContent().map((data) => (
          <div className='card__content' key={data.id}>
            <h2 id={data.id.toString()} className='card___content-title'>
              {data.title}
            </h2>
            <div id={data.id.toString()} className='card___content-body'>
              {data.body}
            </div>
            <div className='card___container-button'>
              <button
                id={data.id.toString()}
                className='card__button-delete'
                onClick={event => handleDeleteContent(event)}>
                Delete
              </button>
              <button
                id={data.id.toString()}
                className='card__button-detail'
                onClick={evt => isOpenDetails(evt)}>
                Details
              </button>
            </div>
          </div>
        ))
      ) : (
        <NoContent />
      )}
      {isOpenModalDetail && listOfContent.length !== 0 && <DetailCard />}
    </StyleCard>
  )
}
