import React, {Component} from 'react'
import ReactDom from 'react-dom'

import TopBar from './TopBar.js';
import SpotOfJavaMain from './SpotOfJavaMain.js';

export default class NavMenu extends Component {
  constructor(props) {
    super(props);
    this.displaySpotOfJavaDemo = this.displaySpotOfJavaDemo.bind(this);

    this.reactDomRender  = ReactDom.render;
    this.reactDomRender  = this.reactDomRender.bind(this);
    this.targetContainer = document.getElementById('app');
  }

  displaySpotOfJavaDemo(event) {
    this.reactDomRender (
      <div>
        <TopBar className="TopBar" displayHeading={true}/>
        <NavMenu/>
        <SpotOfJavaMain/>
      </div>,
      this.targetContainer
    );
  }

  render() {
    return(
      <div className="NavMenu">
        <div>&nbsp;</div>
        <div>&nbsp;<i className="far fa-folder" style={{"color": "#ffffff"}}>&nbsp;&nbsp;</i><a href="javascript:void(0)" onClick={this.displaySpotOfJavaDemo}>SpotOfJava&nbsp;Demo</a></div>
        <div>&nbsp;</div>
      </div>
    );
  }
}
