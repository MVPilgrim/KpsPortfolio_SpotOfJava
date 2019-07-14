import React, {Component} from 'react'

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
              The SpotOfJava Demonstration currently has a single "Spot of Java" - SOJBasic with a "Hello World!" implementation. Over time, I plan on adding
              more basic demos within SOJBasic and other "Spots" to demonstrate proficiency with various Java capabilities.
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
