import { useContext } from 'react'
import NoContent from '../NoContent'
import StyleCard from './StyleCard'
import UserContentContext from '../../context/UserContext'
import DetailCard from '../DetailCard'
import { FiEdit3 } from 'react-icons/fi'
import { deleteContent } from '../../helpers/api/request/api'

export default function Card() {
  const {
    listOfContent,
    setFilteredContent,
    setIsOpenModalDetail,
    isOpenModalDetail,
    setListOfContent
  } = useContext(UserContentContext)

  const isOpenDetails = (event: any) => {
    event?.preventDefault()
    const { target } = event;
    const findContentOfList = listOfContent.find(
      content => content.id === +target.id
    )
    setFilteredContent([findContentOfList])
    setIsOpenModalDetail(true)
  }

  const handleDeleteContent = async (event: any) => {
    const { target } = event;
    const {data} = await deleteContent(target.id)
    setListOfContent(data)
  }

  return (
    <StyleCard className='card__board'>
      {listOfContent.length > 0 ? (
        listOfContent.map((data) => (
          <div className='card__content' key={data.id}>
            <h2 id={data.id.toString()} className='card___content-title'>
              {data.title}
              <abbr title='Edit content'>
                <FiEdit3 className='card__edit-icon' />
              </abbr>
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
