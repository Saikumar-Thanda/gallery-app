import './index.css'

const ThumbnailItem = props => {
  const {eachThumbnailDetails, onClickActiveImageId, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = eachThumbnailDetails
  const onClickUrl = () => {
    onClickActiveImageId(id)
  }

  const activeImageClassName = isActive ? '' : 'opacity'

  return (
    <li className="thumbnail-item">
      <button className="button" onClick={onClickUrl} type="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={activeImageClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
