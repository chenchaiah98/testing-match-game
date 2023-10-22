import {Component} from 'react'

import './index.css'

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
          />
        </div>
        <div className="header-details-container">
          <div>
            <p>Score: 0</p>
          </div>
          <div className="timer-container">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                alt="timer"
              />
              <span>Time</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
