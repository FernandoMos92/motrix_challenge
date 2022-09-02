import { useContext, useState } from 'react'
import { FiEdit3 } from 'react-icons/fi'
import { GrFormClose } from 'react-icons/gr'
import UserContentContext from '../../context/UserContext'
import { updateContent } from '../../helpers/api/request/api'
import Details from './Details'

function DetailCard() {
  const [isEdit, setIsEdit] = useState(false)
  const { filteredContent, setIsOpenModalDetail, content, setContent } =
    useContext(UserContentContext)

  const handleChange = ({ target }: any) => {
    const { name, value } = target;
    setContent({ ...content, [name]: value })
  };

  const handleSaveContent = (id:number | string, title:string, body:string) => {
    updateContent(id, title, body)
    window.location.reload()
    setIsEdit(false)
  }
  
  
  const { title, body } = content;
  return (
    <Details>
      <GrFormClose
        className='details__icon-close'
        onClick={() => setIsOpenModalDetail(false)}
      />
      {filteredContent.map(content => (
        <div className='details__container-content'>
          {isEdit ? (
            <input
              type='text'
              name="title"
              value={title}
              placeholder={content.title}
              onChange={handleChange}
              className="details__input-edit default__edit"
            />
          ) : (
            <h1>
              {content.title}
              {!isEdit && (
                <abbr title='Edit content'>
                  <FiEdit3
                    className='card__edit-icon'
                    onClick={() => setIsEdit(!isEdit)}
                  />
                </abbr>
              )}
            </h1>
          )}
          {isEdit ? (
            <textarea
              value={body}
              name="body"
              id='body'
              cols={20}
              rows={20}
              placeholder={content.body}
              onChange={handleChange}
              className="details__text-edit default__edit"
            ></textarea>
            
          ) : (
            <div className='details__body'>{content.body}</div>
          )}
          <div className='details__date'>
            <label htmlFor=''>Created content in:</label>
            <p>{content.createdAt.toString()}</p>
            <label htmlFor=''>Last update content at:</label>
            <p>{content.updatedAt.toString()}</p>
          </div>
          {isEdit && <div className='details__container-buttons'>
            <button onClick={() => setIsEdit(false)}>Cancel</button>
            <button
              onClick={() => handleSaveContent(content.id, title, body.length === 0 ? content.body : body)}
              disabled={title.length <= 3}
            >
              Save
            </button>
          </div>}
        </div>
      ))}
    </Details>
  )
}

export default DetailCard
