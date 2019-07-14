import React, {Component}       from 'react'
//import ReactDOM, {DOMComponent} from 'react-dom'

import ButtonSpotOfJava   from './ButtonSpotOfJava.js'
import TopBar             from './TopBar.js'
import SOJPopupAbout      from './SOJPopupAbout.js'
import SOJPopupBasic      from './SOJPopupBasic.js'
import SOJPopupDirections from './SOJPopupDirections.js'

export default class SpotOfJavaPane extends Component {
  constructor(props) {
    super(props);
    this.handleBasicButtonClick      = this.handleBasicButtonClick.bind(this);
    this.handleAboutButtonClick      = this.handleAboutButtonClick.bind(this)
    this.handleDirectionsButtonClick = this.handleDirectionsButtonClick.bind(this)
    this.closeAbout                  = this.closeAbout.bind(this)
    this.closeDirections             = this.closeDirections.bind(this)
    this.closeBasic                  = this.closeBasic.bind(this)

    this.state = {
      msgArray : [],
      ws : "",
      displayAbout          : false,
      displayDirections     : false,
      displayBasic          : false
    }
  }

  handleBasicButtonClick(event) {
    this.setState({displayBasic: true})
  }
  closeBasic(event) {
    this.setState({displayBasic: false})
  }

  handleAboutButtonClick(event) {
    this.setState({displayAbout: true})
  }
  closeAbout(event) {
    this.setState({displayAbout: false})
  }

  handleDirectionsButtonClick(event) {
    this.setState({displayDirections: true})
  }
  closeDirections(event) {
    this.setState({displayDirections: false})
  }

  
  render() {
    return(
      <div>
        <TopBar className="SpotOfJavaDemoTopBar displayHeading={true}"/>

        <ButtonSpotOfJava label="About" style={{"left": "9.5%"}} handleClick={this.handleAboutButtonClick}/>
        <ButtonSpotOfJava label="Directions" style={{"left": "12.0%", "width": "60px"}} handleClick={this.handleDirectionsButtonClick}/>
        <ButtonSpotOfJava label="SOJ Basic" style={{"left": "16.0%", "width": "80px"}} handleClick={this.handleBasicButtonClick}/>

        <div className="SpotOfJavaDemoHeading">Spot-of-Java Demo</div>

        <SOJPopupAbout      displayPopup={this.state.displayAbout} closeCallback={this.closeAbout}/>
        <SOJPopupDirections displayPopup={this.state.displayDirections} closeCallback={this.closeDirections}/>
        <SOJPopupBasic      displayPopup={this.state.displayBasic} closeCallback={this.closeBasic}/>
     </div>
    );
  }
}
