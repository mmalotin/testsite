import React from 'react';
import PostAPI from './api';
import { Link } from 'react-router-dom';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ArrowForward from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import Paper from 'material-ui/Paper';

const styles = {
  paper: {
    width: '50%',
    position: 'relative',
    left: '25%',
    marginBottom: 70,
  },
  button: {
    position: 'absolute',
    right: -25,
    bottom: -25,
  }
}


class MyCard extends React.Component {
  render() {
    return(
      <Paper style={styles.paper} zDepth={5}>
        <Card>
          <CardMedia
            overlay={<CardTitle title={this.props.title} subtitle={this.props.author}/>}
            >
            <img src="./images/default-image.jpg" alt="" />
          </CardMedia>
          <CardText>
            {this.props.preview}
          </CardText>
        </Card>
        <FloatingActionButton
          style={styles.button}
          secondary={true}
          containerElement={<Link to={"/blog/" + this.props.id}/>}
          >
          <ArrowForward />
        </FloatingActionButton>
      </Paper>
    );
  }
}


class AllPosts extends React.Component {
  render() {
    const cards = PostAPI.all().map((p, index) => (
      <MyCard
        title={p.title}
        author={p.author}
        preview={p.preview}
        file={p.file}
        id={p.id}
      />
    ));
    return (
      <div>
        {cards}
      </div>
    );
  }
}


export default AllPosts
