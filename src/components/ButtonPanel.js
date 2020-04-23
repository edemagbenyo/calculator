import React, { Component } from 'react';
import Button from './Button';
import '../styles/ButtonPanel.scss'

class ButtonPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="ButtonPanel">
        <div className="group1">
          <Button color="#E0E0E0" wide={false} name="AC" />
          <Button color="#E0E0E0" wide={false} name="+/-" />
          <Button color="#E0E0E0" wide={false} name="%" />
          <Button  wide={false} name="÷" />
        </div>
        <div className="group2">
          <Button color="#E0E0E0" wide={false} name="7" />
          <Button color="#E0E0E0" wide={false} name="8" />
          <Button color="#E0E0E0" wide={false} name="9" />
          <Button  wide={false} name="X" />
        </div>
        <div className="group3">
          <Button color="#E0E0E0" wide={false} name="4" />
          <Button color="#E0E0E0" wide={false} name="5" />
          <Button color="#E0E0E0" wide={false} name="6" />
          <Button  wide={false} name="-" />
        </div>
        <div className="group4">
          <Button color="#E0E0E0" wide={false} name="1" />
          <Button color="#E0E0E0" wide={false} name="2" />
          <Button color="#E0E0E0" wide={false} name="3" />
          <Button  wide={false} name="+" />
        </div>
        <div className="group5">
          <Button color="#E0E0E0" wide={true} name="0" />
          <Button color="#E0E0E0" wide={false} name="." />
          <Button  wide={false} name="=" />
        </div>
      </div>
    );
  }
}

export default ButtonPanel;
