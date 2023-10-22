import './index.css'

const ImageList = props => {
  const {imagesList, activeTab} = props

  return (
    <>
      <div>
        <ul className="selecting-image-container">
          {imagesList.map(each =>
            each.category === activeTab ? (
              <li key={each.id}>
                <img
                  src={each.imageUrl}
                  alt={each.thumbnailUrl}
                  className="selecting-image"
                />
              </li>
            ) : null,
          )}
        </ul>
      </div>
    </>
  )
}

export default ImageList
