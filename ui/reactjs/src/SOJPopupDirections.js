import React, {Component} from 'react'
//import ReactDOM, {DOMComponent} from 'react-dom'

export default class SOJPopupDirections extends Component {
  constructor(props) {
    super(props)
    this.closePopup = this.closePopup.bind(this)
  }

  closePopup() {
    this.props.closeCallback()
  }

  render() {
    var retEle = (
      <p/>
    )
    if (this.props.displayPopup) {
      retEle = (
        <div className="SOJPopup">
          <i className="far fa-window-close" style={{"float": "right","font-size": "25px","margin": "5px 10px 0 0","color": "#555555"}} onClick={this.closePopup}></i>
          <h1>Directions for the SpotOfJava Demonstration</h1>
          <div className="PopupTextBody">
            <p>
              Just click on one of the "SpotOfJava" icons to execute a demo.
            </p>
          </div>
        </div>
      );
    }

    return(
      <div>
        {retEle}
      </div>
    );
  }
}
