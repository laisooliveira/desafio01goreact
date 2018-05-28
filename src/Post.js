import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';
import './post.scss';

const Post = props => (
  <div className="post">
    <PostHeader author={props.data.author} avatar={props.data.avatar} time={props.data.time} />
    <p>{props.data.description}</p>
  </div>
);

Post.PropTypes = {
  data: PropTypes.object,
};

export default Post;
