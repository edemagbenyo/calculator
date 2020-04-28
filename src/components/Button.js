import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  name, color, wide, clickHandler,
}) => {
  const widthSize = wide ? '50%' : '25%';
  return (
    <button
      type="button"
      style={{ backgroundColor: color, width: widthSize }}
      onClick={() => clickHandler(name)}
    >
      {name}
    </button>
  );
};
Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func.isRequired,
};
Button.defaultProps = {
  color: '#F5913E',
  wide: '25%',
};

export default Button;
