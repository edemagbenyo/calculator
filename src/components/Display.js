import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Display extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    const { result } = this.props;
    return (
      <div>
        Display result
        {result}
      </div>
    );
  }
}

Display.propTypes = {
  result: PropTypes.string,
};
Display.defaultProps = {
  result: '0',
};
export default Display;
