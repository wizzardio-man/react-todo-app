import React from "react";
import PropTypes from 'prop-types';

const Header = props => (
  <h1 className='card-title'>
    {props.msg}
  </h1>
);

Header.protoTypes = {
  msg: PropTypes.string
}

Header.defaultProps = {
  msg: 'Default message for the Header component'
}

export default Header;