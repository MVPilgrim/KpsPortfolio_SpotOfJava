import React, {Component} from 'react'

export default class ButtonSpotOfJava extends Component {
  render() {
    return (
      <button
        className="SpotOfJavaDemoButton"
        style={this.props.style}
        onClick={this.props.handleClick}>
        {this.props.label}
      </button>
    );
  }
};
