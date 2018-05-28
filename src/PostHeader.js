import React from 'react';
import PropTypes from 'prop-types';
import './post-header.scss';

const PostHeader = props => (
  <div className="header-post">
    <img src={props.avatar} alt="" />
    <div className="content">
      <h1>{props.author}</h1>
      <small>{props.time}</small>
    </div>
  </div>
);

PostHeader.defaultProps = {
  author: '',
  avatar: '',
  time: '',
};

PostHeader.propTypes = {
  author: PropTypes.string,
  avatar: PropTypes.string,
  time: PropTypes.string,
};
export default PostHeader;
