import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import '../styles/ButtonPanel.scss';

class ButtonPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const { clickHandler } = this.props;
    return clickHandler(buttonName);
  }

  render() {
    return (
      <div className="ButtonPanel">
        <div className="group1">
          <Button color="#E0E0E0" wide={false} name="AC" clickHandler={this.handleClick} />
          <Button color="#E0E0E0" wide={false} name="+/-" clickHandler={this.handleClick} />
          <Button color="#E0E0E0" wide={false} name="%" clickHandler={this.handleClick} />
          <Button wide={false} name="÷" clickHandler={this.handleClick} />
        </div>
        <div className="group2">
          <Button color="#E0E0E0" wide={false} name="7" clickHandler={this.handleClick} />
          <Button color="#E0E0E0" wide={false} name="8" clickHandler={this.handleClick} />
          <Button color="#E0E0E0" wide={false} name="9" clickHandler={this.handleClick} />
          <Button wide={false} name="x" clickHandler={this.handleClick} />
        </div>
        <div className="group3">
          <Button color="#E0E0E0" wide={false} name="4" clickHandler={this.handleClick} />
          <Button color="#E0E0E0" wide={false} name="5" clickHandler={this.handleClick} />
          <Button color="#E0E0E0" wide={false} name="6" clickHandler={this.handleClick} />
          <Button wide={false} name="-" clickHandler={this.handleClick} />
        </div>
        <div className="group4">
          <Button color="#E0E0E0" wide={false} name="1" clickHandler={this.handleClick} />
          <Button color="#E0E0E0" wide={false} name="2" clickHandler={this.handleClick} />
          <Button color="#E0E0E0" wide={false} name="3" clickHandler={this.handleClick} />
          <Button wide={false} name="+" clickHandler={this.handleClick} />
        </div>
        <div className="group5">
          <Button color="#E0E0E0" wide name="0" clickHandler={this.handleClick} />
          <Button color="#E0E0E0" wide={false} name="." clickHandler={this.handleClick} />
          <Button wide={false} name="=" clickHandler={this.handleClick} />
        </div>
      </div>
    );
  }
}
ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
