import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './Header'
import Main from './Main'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {blueGrey900, cyan200, pink400} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: blueGrey900,
        accent1Color: pink400,
        alternateTextColor: cyan200,
    },
    fontFamily: 'Roboto Slab, serif',
});

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Header />
    <Main />
  </MuiThemeProvider>
);

export default App;
