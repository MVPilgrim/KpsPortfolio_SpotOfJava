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

    this.msg             = "";
    this.src             = "";
  }


  closePopup() {
    this.msg = "";
    this.src = "";
    this.props.closeCallback()
  }

  queryHello() {
    var qhParseResponse = this.qhParseResponse;
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
    this.msg = jsonResponse.msg;
    this.src = jsonResponse.src;
    this.forceUpdate();
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
              The first SpotOfJava Basic demo simply queries a Spring Boot microservice running in the IBM Bluemix cloud. But it does
              shows that the microservice is successfully deployed and returns a response. Click on the "Execute Query" link below to see the message.
            </p>
          </div>

          <div style={{"margin": "0px 5.0% 0px 17.5%"}}>
            <a href="javascript:void(0)" onClick={this.queryHello} className="SOJ" style={{"margin": "0px 5.0% 0px 25.0%","fontSize": "25px"}}>Execute Query</a>
            <iframe srcdoc={this.msg} name="SOJBasicIframe" style={{"margin": "0px 0.0% 0px 23.0%"}} width="35%" height="35px" title="SOJBasicIframe">
            </iframe>
          </div>

          <div style={{"margin": "0px 5.0% 0px 5.0%"}}>
            <p></p>
            <p className="SOJ" style={{"margin": "0px 5.0% 0px 25.0%","fontSize": "25px"}}>SpotOfJava Basic Source</p>
            <iframe srcdoc={this.src} name="SOJBasicSrcIframe" style={{"margin": "0px 0.0% 0px 0.0%","fontSize": "32px"}} width="100%" height="425px" title="SOJBasicSrcIframe">
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
