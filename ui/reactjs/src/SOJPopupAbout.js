import React, {Component} from 'react'
//import ReactDOM, {DOMComponent} from 'react-dom'

export default class SOJPopupAbout extends Component {
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
        <div className="SOJPopup"  style={{"overflow": "scroll"}}>
          <i className="far fa-window-close" style={{"float": "right","fontSize": "25px","margin": "5px 10px 0 0","color": "#555555"}} onClick={this.closePopup}></i>
          <h1>About Spot of Java</h1>
          <div className="PopupTextBody">
            <p>
              The SpotOfJava Demonstration provides a number of "Spots of Java" to illustrate various Java capabilities.
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
