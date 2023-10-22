import {Component} from 'react'

import './index.css'

class MenuList extends Component {
  render() {
    const {activeTab, changeActiveTab, tabsList} = this.props

    return (
      <div className="menu-container">
        <ul className="menu-list">
          {tabsList.map(eachMenu => (
            <li
              key={eachMenu.tabId}
              onClick={changeActiveTab}
              id={eachMenu.tabId}
              className={
                activeTab === eachMenu.tabId ? 'menu-item active' : 'menu-item'
              }
            >
              {eachMenu.displayText}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
export default MenuList
