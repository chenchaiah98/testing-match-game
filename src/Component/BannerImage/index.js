import './index.css'

const BannerImage = props => {
  const {imgUrl} = props
  return (
    <div className="banner-container">
      <img src={imgUrl} alt="bannerImage" className="banner-image" />
    </div>
  )
}

export default BannerImage
