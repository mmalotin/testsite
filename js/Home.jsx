import React from 'react'
import home from '../markdowns/Home.md'
import Paper from 'material-ui/Paper';
import Remarkable from 'remarkable'
const md = new Remarkable();

const styles = {
  paper: {
    width: '98%',
    position: 'relative',
    left: '1%',
  }
}

class Home extends React.Component {
  render() {
    return(
      <Paper style={styles.paper}>
        <div dangerouslySetInnerHTML={{__html: md.render(home)}} />
      </Paper>
    );
  }
}

export default Home;
