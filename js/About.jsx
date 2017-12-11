import React from 'react'
import about from '../markdowns/About.md'
import Paper from 'material-ui/Paper';
import Md from './MD.jsx'

const styles = {
  paper: {
    width: '98%',
    position: 'relative',
    left: '1%',
  }
}


class About extends React.Component {
  render() {
    return(
      <Paper style={styles.paper}>
        <Md file={about} />
      </Paper>
    );
  }
}

export default About;
