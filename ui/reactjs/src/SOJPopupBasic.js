import React, {Component} from 'react'
import ReactDom from 'react-dom'

export default class SOJPopupBasic extends Component {
  constructor(props) {
    super(props)
    this.reactDomRender  = ReactDom.render;
    this.reactDomRender  = this.reactDomRender.bind(this);

    this.closePopup      = this.closePopup.bind(this);
    this.queryHello      = this.queryHello.bind(this);
    this.qhParseResponse = this.qhParseResponse.bind(this);
  }

  closePopup() {
    this.props.closeCallback()
  }

  queryHello(qhParseResponse) {
    alert("queryHello entered.");
    var xhrQueryHello = new XMLHttpRequest();
    xhrQueryHello.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        qhParseResponse(this.responseText);
      }
    };
    xhrQueryHello.open("GET", "https://spotofjava-dev.mybluemix.net/SOJBasic/hello", true);
    xhrQueryHello.send();
  }
  qhParseResponse(xhrResponse) {
    var jsonResponse = JSON.parse(xhrResponse);
    alert("jsonResponse: msg: " + jsonResponse.msg);

  }


  render() {
    var retEle = (
      <p/>
    )
    if (this.props.displayPopup) {
      retEle = (
        <div className="SOJPopup" name="SOJPopup">
          <i className="far fa-window-close" style={{"float": "right","fontSize": "25px","margin": "5px 10px 0 0","color": "#555555"}} onClick={this.closePopup}></i>
          <h1 style={{"margin": "1.0% 0.0% 0px 7.5%"}}>SpotOfJava Basic</h1>
          <div className="PopupTextBody">
            <p>
              The SpotOfJava Basic demo simply queries a Spring Boot microservice running in the IBM Bluemix cloud. But it 
              shows that the app is successfully deployed and retruns a response. Click on the link below to retrieve a message.
            </p>
          </div>

          <div style={{"margin": "0px 5.0% 0px 17.5%"}}>
            <p>
               <a className="SOJ" href="#" onClick={this.queryHello(this.qhParseResponse)} style={{"fontSize": "25px"}}>https://spotofjava-dev.mybluemix.net/</a>
            </p>
            <iframe name="SOJBasicIframe" style={{"margin": "0px 5.0% 0px 23.0%"}} width="35%" height="35px" title="SOJBasicIframe">
            </iframe>
          </div>

          <div style={{"margin": "0px 5.0% 0px 5.0%"}}>
              <p className="SOJ" style={{"margin": "0px 5.0% 0px 25.0%","fontSize": "25px"}}>SpotOfJava Basic source.</p>
            <iframe name="SOJBasicSrcIframe" style={{"margin": "0px 0.0% 0px 0.0%"}} width="100%" height="425px" title="SOJBasicSrcIframe">
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
