import React from "react";
import PropTypes from 'prop-types';

const Header = props => (
  <div className='card-header'>
    <h1 className='card-header-title header'>
      {props.msg}
    </h1>
  </div>
);

Header.protoTypes = {
  msg: PropTypes.string
}

Header.defaultProps = {
  msg: 'Default message for the Header component'
}

export default Header;