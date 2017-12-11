import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './Header'
import Main from './Main'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {darken} from 'material-ui/utils/colorManipulator';
import {blueGrey900, tealA400} from 'material-ui/styles/colors';

const primary = blueGrey900;
const accent = darken(tealA400, 0.1);

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: primary,
        accent1Color: accent,
        alternateTextColor: primary
    },
    fontFamily: 'Roboto Slab, serif',
    appBar: {
      textColor: accent,
    },
    tabs: {
      textColor: darken(accent, 0.1),
      selectedTextColor: accent,
    },
});

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Header />
    <Main />
  </MuiThemeProvider>
);

export default App;
