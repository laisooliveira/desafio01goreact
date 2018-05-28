import React from 'react';
import PropTypes from 'prop-types';
import './header.scss';

const Header = props => (
  <div className="header">
    <h1> {props.title}</h1>
  </div>
);

Header.defaultProps = {
  title: 'RocketBook',
};

Header.propTypes = {
  title: PropTypes.string,
};
export default Header;
