import React from 'react';
import PropTypes from 'prop-types';

const Button = ({name})=>{
return (<div>{name}</div>)
}
Button.propTypes={
  name:PropTypes.string.isRequired
}

export default Button