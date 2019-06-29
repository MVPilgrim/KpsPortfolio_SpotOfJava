import './StandaloneApp.css'
import TopBar from './TopBar.js'
import NavMenu from './NavMenu.js'
import StandaloneMainView from './StandaloneMainView.js'

import React, {Component} from 'react'

class StandaloneApp extends Component {
  constructor(props) {
    super(props);
    this.mainViewRef = React.createRef();
  }

  render() {
    return <div className="App">
      <TopBar className="TopBar" displayHeading={true}/>
      <NavMenu mainViewRef={this.mainViewRef} />
      <StandaloneMainView mainViewRef={this.mainViewRef} />
    </div>
  }
}

export default StandaloneApp
