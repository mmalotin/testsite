import React from 'react'
import home from '../markdowns/Home.md'
import Paper from 'material-ui/Paper';
import Md from './MD.jsx'
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
        <Md file={home} />
      </Paper>
    );
  }
}

export default Home;
