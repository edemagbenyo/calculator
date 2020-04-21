import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Display extends Component {
  render() {
    return (
      <div>
        Display result {this.props.result}
      </div>
    );
  }
}

Display.propTypes={
  result:PropTypes.string.isRequired
}
export default Display;