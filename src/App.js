import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './Header';
import Post from './Post';
import img from '../public/img.png';

class App extends Component {
  state = {
    post: [
      {
        id: 0,
        author: 'Lais',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu nunc dapibus, volutpat felis nec, sollicitudin nibh. Sed mollis, sem eu feugiat molestie, nulla metus laoreet neque, ac cursus ipsum odio vel urna. Sed enim felis, aliquam ac commodo et, fermentum varius elit. Mauris viverra et tortor vitae accumsan. Vivamus bibendum diam sit amet nisl laoreet malesuada in ut massa. In eget tellus nulla. Mauris porta lorem a tortor tincidunt, ac semper sapien lobortis. In ac nulla massa. Mauris viverra, risus non accumsan molestie, nunc nibh suscipit justo, a sagittis lectus metus semper leo.',
        avatar: img,
        time: 'há 20 min',
      },
      {
        id: 1,
        author: 'Evelyn',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu nunc dapibus, volutpat felis nec, sollicitudin nibh. Sed mollis, sem eu feugiat molestie, nulla metus laoreet neque, ac cursus ipsum odio vel urna. Sed enim felis, aliquam ac commodo et, fermentum varius elit. Mauris viverra et tortor vitae accumsan. Vivamus bibendum diam sit amet nisl laoreet malesuada in ut massa. In eget tellus nulla. Mauris porta lorem a tortor tincidunt, ac semper sapien lobortis. In ac nulla massa. Mauris viverra, risus non accumsan molestie, nunc nibh suscipit justo, a sagittis lectus metus semper leo',
        avatar: img,
        time: 'há 10 min',
      },
      {
        id: 2,
        author: 'Flash',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu nunc dapibus, volutpat felis nec, sollicitudin nibh. Sed mollis, sem eu feugiat molestie, nulla metus laoreet neque, ac cursus ipsum odio vel urna. Sed enim felis, aliquam ac commodo et, fermentum varius elit. Mauris viverra et tortor vitae accumsan. Vivamus bibendum diam sit amet nisl laoreet malesuada in ut massa. In eget tellus nulla. Mauris porta lorem a tortor tincidunt, ac semper sapien lobortis. In ac nulla massa. Mauris viverra, risus non accumsan molestie, nunc nibh suscipit justo, a sagittis lectus metus semper leo',
        avatar: img,
        time: 'há 3 min',
      },
    ],
  };
  render() {
    return (
      <div>
        <Header title="RocketBook" />
        {this.state.post.map((post, key) => <Post data={post} key={key} />)}
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
