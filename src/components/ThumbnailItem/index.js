// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {listofthumbnail, clickingtheimage, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = listofthumbnail
  console.log(isActive)
  const activethumbnail = isActive ? '' : 'active_tab'
  const updating = () => {
    console.log(id)
    clickingtheimage(id)
  }
  return (
    <li className="items_container">
      <button type="button" className="button">
        <img
          className={`thumbnailimage ${activethumbnail}`}
          src={thumbnailUrl}
          onClick={updating}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
