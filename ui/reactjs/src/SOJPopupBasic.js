import React, {Component} from 'react'
//import ReactDOM, {DOMComponent} from 'react-dom'

export default class SOJPopupBasic extends Component {
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
        <div className="SOJPopup" name="SOJPopup">
          <i className="far fa-window-close" style={{"float": "right","fontSize": "25px","margin": "5px 10px 0 0","color": "#555555"}} onClick={this.closePopup}></i>
          <h1>SpotOfJava Basic</h1>
          <div className="PopupTextBody">
            <p>
              The SpotOfJava Basic demo simply queries a Spring Boot microservice running in the IBM Bluemix cloud. But it 
              shows that the app is successfully deployed and retruns a response. Click on the link below to retrieve a message.
            </p>
          </div>

          <div style={{"margin": "0px 5.0% 0px 18.0%"}}>
            <p>
              <a class="SOJ" target="SOJBasicIframe" href="https://spotofjava-dev.mybluemix.net/hello/" style={{"fontSize": "25px"}}>https://spotofjava-dev.mybluemix.net/</a>
            </p>
            <iframe name="SOJBasicIframe" style={{"margin": "0px 5.0% 0px 23.0%"}} width="35%" height="35px" title="SOJBasicIframe">
            </iframe>
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
