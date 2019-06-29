import React, {Component} from 'react'

export default class StandaloneMainView extends Component {
  constructor(props) {
    super(props);
    this.mainViewRef = props.mainViewRef;
  }

  render() {
    return(
      <div className="MainView" ref={this.mainViewRef}>
      </div>
    );
  }
}
