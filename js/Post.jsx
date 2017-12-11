import React from 'react'
import PostAPI from './api'
import { Link } from 'react-router-dom'
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ArrowBack from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import Md from './MD.jsx'

const styles = {
  paper: {
    width: '90%',
    position: 'relative',
    left: '5%',
  },
  button: {
    position: 'fixed',
    left: 10,
    top: '8%',
  }
}

class Post extends React.Component {
  constructor(props) {
    super(props);
    const post = PostAPI.get(
      parseInt(props.match.params.number, 10)
    );

    this.state = {
      post: post
    };
  }

  render(){
    const file = require('../markdowns/' + this.state.post.file + '.md')
    return(
      <div>
        <FloatingActionButton
          style={styles.button}
          secondary={true}
          containerElement={<Link to={'/blog'} />}
          >
          <ArrowBack />
        </FloatingActionButton>
        <Paper style={styles.paper}>
          <Md file={file} />
        </Paper>
      </div>
    );
  }
}

export default Post;
