import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';
import {cyan200, pink400} from 'material-ui/styles/colors';
import SvgIcon from 'material-ui/SvgIcon';
import {Link, withRouter} from 'react-router-dom';
import IconButton from 'material-ui/IconButton';

const styles = {
  appBar: {
    flexWrap: 'wrap',
  },
  tabs: {
    width: '100%',
  },
  title: {
    position: 'relative',
    left: '44%',
    fontFamily: 'Pacifico, cursive',
  }
};

const gh_icon = (
  <IconButton tooltip="Fork me on GitHub" href='https://www.google.com/' tooltipPosition='bottom-left' target='_blank'>
    <SvgIcon color={cyan200} hoverColor={pink400} style={{marginRight: 24}}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205
      11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422
      18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838
      1.236 1.838 1.236 1.07 1.835 2.809
      1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38
      1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267
      1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645
      1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81
      1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24
      12.297c0-6.627-5.373-12-12-12"/>
    </SvgIcon>
  </IconButton>
);

class Header extends React.Component {
  constructor(props) {
    super(props);
    const loc = props.location.pathname
    this.state = {
      tab: loc,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({
      tab: value
    });
  }

  render() {
    return(
      <AppBar
        title='Page Rank for Spark'
        titleStyle={styles.title}
        showMenuIconButton={false}
        style={styles.appBar}
        iconElementRight={gh_icon}
        >
        <Tabs style={styles.tabs} onChange={this.handleChange} value={this.state.tab}>
           <Tab value={'/'} label="Home" containerElement={<Link to="/"/>} />
           <Tab value={'/about'} label="About" containerElement={<Link to="/about"/>}/>
           <Tab value={'/blog'} label="Blog" containerElement={<Link to="/blog"/>} />
         </Tabs>
      </AppBar>
    );
  }
}

export default withRouter(Header);