import {Component} from 'react'

import ImageList from '../imageLIst'
import MenuList from '../MenuList'
import BannerImage from '../BannerImage'
import Header from '../Header'

import './index.css'

class Home extends Component {
  state = {activeTab: 'FRUIT'}

  //   componentDidMount() {
  //     this.getRandomNumber()
  //   }

  getRandomNumber = () => {
    const {imagesList} = this.props
    const randomNumber = Math.ceil(Math.random() * imagesList.length - 1)
    return randomNumber
  }

  changeActiveTab = tabid => {
    const tabActive = tabid.target.id
    this.setState({activeTab: tabActive})
  }

  render() {
    const {activeTab} = this.state
    const {imagesList, tabsList} = this.props

    return (
      <div className="main-app-container">
        <Header />
        <BannerImage imgUrl={imagesList[this.getRandomNumber()].imageUrl} />
        <MenuList
          tabsList={tabsList}
          activeTab={activeTab}
          changeActiveTab={this.changeActiveTab}
        />
        <ImageList imagesList={imagesList} activeTab={activeTab} />
      </div>
    )
  }
}

export default Home
