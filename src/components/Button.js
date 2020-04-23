import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name,color,wide }) => {
  const widthSize = wide? "50%" : "25%";
  return (<div style={{backgroundColor:color, width:widthSize}}>{name}</div>);
}
Button.propTypes = {
  name: PropTypes.string.isRequired,
};
Button.defaultProps={
  color:'#F5913E'
}

export default Button;
